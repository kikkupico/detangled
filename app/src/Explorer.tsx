import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import type { Graph } from "./types";
import NodePane from "./NodePane";
import EdgePane from "./EdgePane";
import GraphView from "./GraphView";
import Header from "./Header";
import SiblingCarousel from "./SiblingCarousel";
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

  // Siblings: children of parents, sorted
  const sortedSiblings = useMemo(() => {
    const parentIds = node.parents;
    if (parentIds.length === 0) {
      // If no parents, fall back to all roots or nodes at depth 0
      return Object.values(graph.nodes)
        .filter((n) => n.depth === 0)
        .sort((a, b) => a.id.localeCompare(b.id));
    }

    const siblingsSet = new Set<string>();
    parentIds.forEach((pId) => {
      const parent = graph.nodes[pId];
      if (parent) {
        parent.children.forEach((cId) => {
          if (graph.nodes[cId]) siblingsSet.add(cId);
        });
      }
    });

    return Array.from(siblingsSet)
      .map((id) => graph.nodes[id])
      .sort((a, b) => a.id.localeCompare(b.id));
  }, [graph, node.id, node.parents]);

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

  // Touch gesture handling for mobile (single-finger swipe)
  useEffect(() => {
    const el = midRef.current;
    if (!el || showGraph) return;

    let touchStart: { x: number; y: number; t: number; atTop: boolean; atBottom: boolean } | null = null;
    let gesture: "nav-x" | "nav-y" | "scroll" | null = null;

    function onTouchStart(e: TouchEvent) {
      if (e.touches.length !== 1) return;
      if ((e.target as HTMLElement).closest("button, a")) return;
      const touch = e.touches[0];
      const pane = el!.querySelector(".node-pane");
      const atTop = !pane || pane.scrollTop <= 0;
      const atBottom = !pane || Math.ceil(pane.scrollTop + pane.clientHeight) >= pane.scrollHeight;
      touchStart = { x: touch.clientX, y: touch.clientY, t: Date.now(), atTop, atBottom };
      gesture = null;
    }

    function onTouchMove(e: TouchEvent) {
      if (!touchStart || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      // Classify gesture once we have enough movement to know direction
      if (!gesture && (absDx > 8 || absDy > 8)) {
        if (absDx > absDy) {
          gesture = "nav-x";
        } else if ((dy > 0 && touchStart.atTop) || (dy < 0 && touchStart.atBottom)) {
          gesture = "nav-y";
        } else {
          gesture = "scroll";
        }
      }

      // Block native scroll only when we've claimed the gesture for navigation
      if (gesture === "nav-x" || gesture === "nav-y") {
        e.preventDefault();
      }
    }

    function onTouchEnd(e: TouchEvent) {
      if (!touchStart || e.changedTouches.length === 0) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      const dt = Date.now() - touchStart.t;
      const { atTop, atBottom } = touchStart;
      const g = gesture;
      touchStart = null;
      gesture = null;

      if (dt > 600) return;
      const threshold = 40;

      if (g === "nav-x" && Math.abs(dx) > threshold) {
        navigate(dx < 0 ? "left" : "right");
      } else if (g === "nav-y" && Math.abs(dy) > threshold) {
        if (dy > 0 && atTop) navigate("down");
        else if (dy < 0 && atBottom) navigate("up");
      }
    }

    function onTouchCancel() {
      touchStart = null;
      gesture = null;
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchCancel, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [navigate, showGraph]);

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

  return (
    <div className="explorer-wrapper">
      <div className="explorer">
        <Header
          graph={graph}
          showGraph={showGraph}
          onBack={onBack}
          onToggleView={() => setShowGraph(!showGraph)}
        />

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
            <EdgePane
              nodes={parentNodes}
              direction="up"
              labelFn={(n) => String(n.depth)}
              onSelect={setCurrentId}
            />

            <div
              className="mid-pane-wrapper"
              ref={midRef}
            >
              <NodePane node={node} />
              <SiblingCarousel
                sortedSiblings={sortedSiblings}
                currentId={currentId}
                onNavigate={navigate}
                onSelect={setCurrentId}
              />
            </div>

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
