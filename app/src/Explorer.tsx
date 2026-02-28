import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import type { Graph } from "./types";
import NodePane from "./NodePane";
import EdgePane from "./EdgePane";
import GraphView from "./GraphView";
import "./Explorer.css";

interface Props {
  graph: Graph;
  onBack: () => void;
}

export default function Explorer({ graph, onBack }: Props) {
  const startId = graph.meta.start[0] ?? graph.roots[0] ?? Object.keys(graph.nodes)[0];
  const [currentId, setCurrentId] = useState(startId);
  const [showGraph, setShowGraph] = useState(true);

  const node = graph.nodes[currentId];
  if (!node) return null;

  const parentNodes = node.parents
    .filter((p) => graph.nodes[p])
    .map((p) => graph.nodes[p]);
  const childNodes = node.children
    .filter((c) => graph.nodes[c])
    .map((c) => graph.nodes[c]);

  // Siblings: same depth, sorted
  const sortedSiblings = useMemo(() => {
    return Object.values(graph.nodes)
      .filter((n) => n.depth === node.depth)
      .sort((a, b) => a.id.localeCompare(b.id));
  }, [graph, node.depth, currentId]);

  // Swipe/drag handling using pointer events
  const pointerStart = useRef<{ x: number; y: number; t: number; id: number } | null>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const lastWheelNav = useRef(0);

  const navigate = useCallback(
    (direction: "left" | "right" | "up" | "down") => {
      if (direction === "left") {
        if (sortedSiblings.length <= 1) return;
        const curIdx = sortedSiblings.findIndex((n) => n.id === currentId);
        if (curIdx < sortedSiblings.length - 1) setCurrentId(sortedSiblings[curIdx + 1].id);
      } else if (direction === "right") {
        if (sortedSiblings.length <= 1) return;
        const curIdx = sortedSiblings.findIndex((n) => n.id === currentId);
        if (curIdx > 0) setCurrentId(sortedSiblings[curIdx - 1].id);
      } else if (direction === "up") {
        const children = graph.nodes[currentId].children.filter((c) => graph.nodes[c]);
        if (children.length > 0) setCurrentId(children[0]);
      } else if (direction === "down") {
        const parents = graph.nodes[currentId].parents.filter((p) => graph.nodes[p]);
        if (parents.length > 0) setCurrentId(parents[0]);
      }
    },
    [currentId, sortedSiblings, graph],
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    // Disable click-and-drag swipe for mouse, keep for touch
    if (e.pointerType === "mouse") return;
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button, a")) return;
    pointerStart.current = { x: e.clientX, y: e.clientY, t: Date.now(), id: e.pointerId };
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!pointerStart.current || pointerStart.current.id !== e.pointerId) return;
      const dx = e.clientX - pointerStart.current.x;
      const dy = e.clientY - pointerStart.current.y;
      const dt = Date.now() - pointerStart.current.t;
      pointerStart.current = null;

      if (dt > 600) return;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const threshold = 40;

      if (absDx > absDy && absDx > threshold) {
        navigate(dx < 0 ? "left" : "right");
      } else if (absDy > absDx && absDy > threshold) {
        navigate(dy < 0 ? "up" : "down");
      }
    },
    [navigate],
  );

  // Trackpad navigation (two-finger scroll)
  useEffect(() => {
    const el = midRef.current;
    if (!el || showGraph) return;

    const handleWheel = (e: WheelEvent) => {
      const { deltaX, deltaY } = e;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Always prevent default on significant horizontal movement to avoid browser back/forward
      if (absX > absY && absX > 10) {
        if (e.cancelable) e.preventDefault();
      }

      const now = Date.now();
      if (now - lastWheelNav.current < 500) return;

      const threshold = 20;

      if (absX > absY && absX > threshold) {
        navigate(deltaX > 0 ? "left" : "right");
        lastWheelNav.current = now;
      } else if (absY > absX && absY > threshold) {
        const pane = el.querySelector(".node-pane");
        if (pane) {
          const isAtTop = pane.scrollTop <= 0;
          const isAtBottom = Math.ceil(pane.scrollTop + pane.clientHeight) >= pane.scrollHeight;

          if (deltaY < 0 && isAtTop) {
            navigate("down");
            lastWheelNav.current = now;
            if (e.cancelable) e.preventDefault();
          } else if (deltaY > 0 && isAtBottom) {
            navigate("up");
            lastWheelNav.current = now;
            if (e.cancelable) e.preventDefault();
          }
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [navigate, showGraph]);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (showGraph) return;
      if (e.key === "ArrowLeft") navigate("right");
      else if (e.key === "ArrowRight") navigate("left");
      else if (e.key === "ArrowUp") navigate("down");
      else if (e.key === "ArrowDown") navigate("up");
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate, showGraph]);

  // Graph icon (tree)
  const graphIconSvg = (
    <svg className="header-icon-svg" viewBox="0 0 20 20" width="20" height="20">
      <circle cx="10" cy="4" r="2.5" />
      <circle cx="5" cy="14" r="2.5" />
      <circle cx="15" cy="14" r="2.5" />
      <line x1="10" y1="6.5" x2="5" y2="11.5" />
      <line x1="10" y1="6.5" x2="15" y2="11.5" />
    </svg>
  );

  // Page/details icon (lines)
  const pageIconSvg = (
    <svg className="header-icon-svg" viewBox="0 0 20 20" width="20" height="20">
      <rect x="3" y="2" width="14" height="16" rx="2" fill="none" stroke="#000" strokeWidth="1.5" />
      <line x1="6" y1="6" x2="14" y2="6" stroke="#000" strokeWidth="1.5" />
      <line x1="6" y1="10" x2="14" y2="10" stroke="#000" strokeWidth="1.5" />
      <line x1="6" y1="14" x2="11" y2="14" stroke="#000" strokeWidth="1.5" />
    </svg>
  );

  return (
    <div className="explorer-wrapper">
      <div className="explorer">
        {/* Unified header */}
        <div className="header-bar">
          <button className="header-btn" onClick={onBack} title="Back to home" aria-label="Back">
            <svg className="header-icon-svg" viewBox="0 0 20 20" width="20" height="20">
              <path d="M10 3 L3 9 V17 H8 V12 H12 V17 H17 V9 L10 3 Z" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="header-title">{graph.meta.title}</span>
          <button
            className="header-btn"
            onClick={() => setShowGraph(!showGraph)}
            title={showGraph ? "Details view" : "Graph view"}
            aria-label={showGraph ? "Details view" : "Graph view"}
          >
            {showGraph ? pageIconSvg : graphIconSvg}
          </button>
        </div>

        {showGraph ? (
          <GraphView
            graph={graph}
            currentId={currentId}
            onSelect={(id) => {
              setCurrentId(id);
              setShowGraph(false);
            }}
          />
        ) : (
          <>
            {/* Top pane - parents */}
            <EdgePane
              nodes={parentNodes}
              direction="up"
              labelFn={(n) => String(n.depth)}
              onSelect={setCurrentId}
            />

            {/* Mid pane - current node with overlaid carousel */}
            <div
              className="mid-pane-wrapper"
              ref={midRef}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <NodePane node={node} />
              {sortedSiblings.length > 1 && (
                <div className="sibling-carousel">
                  {sortedSiblings.map((s) => (
                    <button
                      key={s.id}
                      className={`sibling-dot ${s.id === currentId ? "active" : ""}`}
                      onClick={() => setCurrentId(s.id)}
                      title={s.shortTitle}
                      aria-label={s.shortTitle}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Bottom pane - children */}
            <EdgePane
              nodes={childNodes}
              direction="down"
              labelFn={(n) => String(n.height)}
              onSelect={setCurrentId}
            />
          </>
        )}
      </div>
    </div>
  );
}
