import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import type { Graph } from "./types";
import "./GraphView.css";

interface Props {
  graph: Graph;
  currentId: string;
  onSelect: (id: string) => void;
}

export default function GraphView({ graph, currentId, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<{ x: number; y: number; scale: number }>(() => {
    const saved = sessionStorage.getItem(`gv-transform-${graph.meta.title}`);
    return saved ? JSON.parse(saved) : { x: 0, y: 0, scale: 1 };
  });
  const [hasInitialized, setHasInitialized] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinchState = useRef<{ dist: number; mx: number; my: number } | null>(null);
  const lastTap = useRef<{ x: number; y: number; t: number } | null>(null);
  const pointerDownPos = useRef<{ x: number; y: number } | null>(null);

  // Save transform to sessionStorage when it changes
  useEffect(() => {
    if (hasInitialized) {
      sessionStorage.setItem(`gv-transform-${graph.meta.title}`, JSON.stringify(transform));
    }
  }, [transform, graph.meta.title, hasInitialized]);

  const { layoutNodes, edges, width, height } = useMemo(() => {
    const byDepth: Record<number, string[]> = {};
    let maxDepth = 0;
    const nodesArray = Object.values(graph.nodes).sort((a, b) => a.id.localeCompare(b.id));
    for (const node of nodesArray) {
      const d = node.depth;
      if (!byDepth[d]) byDepth[d] = [];
      byDepth[d].push(node.id);
      maxDepth = Math.max(maxDepth, d);
    }

    const nodeRadius = 20;
    const hSpacing = 100;
    const vSpacing = 90;

    let maxCount = 0;
    for (const ids of Object.values(byDepth)) {
      maxCount = Math.max(maxCount, ids.length);
    }

    const w = Math.max(360, maxCount * hSpacing + 80);
    const h = (maxDepth + 1) * vSpacing + 80;

    const positions: Record<string, { x: number; y: number }> = {};
    const layoutNodesArr: { id: string; x: number; y: number; indexInRow: number }[] = [];

    for (let d = 0; d <= maxDepth; d++) {
      const ids = byDepth[d] || [];
      const rowWidth = ids.length * hSpacing;
      const startX = (w - rowWidth) / 2 + hSpacing / 2;
      ids.forEach((id, i) => {
        const x = startX + i * hSpacing;
        const y = 40 + d * vSpacing;
        positions[id] = { x, y };
        layoutNodesArr.push({ id, x, y, indexInRow: i });
      });
    }

    const edgesArr: { from: string; to: string; fromPos: { x: number; y: number }; toPos: { x: number; y: number } }[] = [];
    for (const node of Object.values(graph.nodes)) {
      for (const pid of node.parents) {
        if (graph.nodes[pid] && positions[pid]) {
          edgesArr.push({
            from: pid,
            to: node.id,
            fromPos: positions[pid],
            toPos: positions[node.id],
          });
        }
      }
    }

    return { layoutNodes: layoutNodesArr, edges: edgesArr, width: w, height: h, nodeRadius };
  }, [graph]);

  // Center graph initially if no saved transform
  useEffect(() => {
    if (!containerRef.current || hasInitialized) return;
    
    const saved = sessionStorage.getItem(`gv-transform-${graph.meta.title}`);
    if (saved) {
      setHasInitialized(true);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return; // Wait for layout

    const scaleX = rect.width / width;
    const scaleY = rect.height / height;
    const scale = Math.min(scaleX, scaleY, 2.5) * 0.9;
    const x = (rect.width - width * scale) / 2;
    const y = (rect.height - height * scale) / 2;
    setTransform({ x, y, scale });
    setHasInitialized(true);
  }, [width, height, graph.meta.title, hasInitialized]);

  // Mouse/touch pan + pinch zoom
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const onNode = !!(e.target as HTMLElement).closest(".gv-node");

    if (activePointers.current.size === 1) {
      if (e.pointerType === "touch") pointerDownPos.current = { x: e.clientX, y: e.clientY };
      if (!onNode) {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY, tx: transform.x, ty: transform.y };
      }
    } else if (activePointers.current.size === 2) {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      setDragging(false);
      lastPinchState.current = null;
      pointerDownPos.current = null; // pinch — no tap
    }
  }, [transform.x, transform.y]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 2) {
      const [p1, p2] = Array.from(activePointers.current.values());
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      const rect = containerRef.current!.getBoundingClientRect();
      const mx = (p1.x + p2.x) / 2 - rect.left;
      const my = (p1.y + p2.y) / 2 - rect.top;

      if (lastPinchState.current) {
        const { dist: prevDist, mx: prevMx, my: prevMy } = lastPinchState.current;
        const zoomFactor = dist / prevDist;
        const panX = mx - prevMx;
        const panY = my - prevMy;
        setTransform((t) => {
          const newScale = Math.max(0.2, Math.min(3, t.scale * zoomFactor));
          const ratio = newScale / t.scale;
          return {
            scale: newScale,
            x: mx - (mx - t.x) * ratio + panX,
            y: my - (my - t.y) * ratio + panY,
          };
        });
      }
      lastPinchState.current = { dist, mx, my };
    } else if (dragging) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setTransform((t) => ({ ...t, x: dragStart.current.tx + dx, y: dragStart.current.ty + dy }));
    }
  }, [dragging]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    activePointers.current.delete(e.pointerId);
    if (activePointers.current.size < 2) {
      lastPinchState.current = null;
    }
    if (activePointers.current.size === 0) {
      setDragging(false);

      // Double-tap to zoom (touch only)
      if (e.pointerType === "touch" && pointerDownPos.current) {
        const moved = Math.hypot(e.clientX - pointerDownPos.current.x, e.clientY - pointerDownPos.current.y);
        pointerDownPos.current = null;

        if (moved < 10) {
          const now = Date.now();
          const rect = containerRef.current!.getBoundingClientRect();
          const mx = e.clientX - rect.left;
          const my = e.clientY - rect.top;

          if (lastTap.current && now - lastTap.current.t < 300) {
            lastTap.current = null;
            setTransform((t) => {
              const newScale = Math.max(0.2, Math.min(3, t.scale * 1.75));
              const ratio = newScale / t.scale;
              return { scale: newScale, x: mx - (mx - t.x) * ratio, y: my - (my - t.y) * ratio };
            });
          } else {
            lastTap.current = { x: mx, y: my, t: now };
          }
        } else {
          lastTap.current = null;
        }
      }
    }
  }, []);

  // Wheel: always zoom (Google Maps behavior — pan is drag-only)
  // Mouse wheel: discrete steps; trackpad scroll/pinch: smooth continuous
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const rect = containerRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const isMouseWheel = !e.ctrlKey && Math.abs(e.deltaY) >= 50;
    const factor = isMouseWheel
      ? e.deltaY > 0 ? 0.9 : 1.1
      : Math.max(0.1, 1 - e.deltaY * 0.005);

    setTransform((t) => {
      const newScale = Math.max(0.2, Math.min(3, t.scale * factor));
      const ratio = newScale / t.scale;
      return {
        scale: newScale,
        x: mx - (mx - t.x) * ratio,
        y: my - (my - t.y) * ratio,
      };
    });
  }, []);

  return (
    <div
      className="graph-view-canvas"
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onWheel={onWheel}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <svg
        className="graph-view-svg"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: "0 0",
        }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {edges.map((e, i) => {
          const fromY = e.fromPos.y + 20;
          const toY = e.toPos.y - 20;
          const midY = (fromY + toY) / 2;
          return (
            <path
              key={i}
              d={`M ${e.fromPos.x} ${fromY} C ${e.fromPos.x} ${midY}, ${e.toPos.x} ${midY}, ${e.toPos.x} ${toY}`}
              className="gv-edge"
            />
          );
        })}
        {layoutNodes.map((n) => {
          const gn = graph.nodes[n.id];
          // Alternate label placement: even index above, odd index below
          const labelAbove = n.indexInRow % 2 === 0;
          const labelY = labelAbove ? n.y - 28 : n.y + 34;
          return (
            <g
              key={n.id}
              className={`gv-node ${n.id === currentId ? "current" : ""}`}
              onClick={() => onSelect(n.id)}
            >
              <circle cx={n.x} cy={n.y} r={20} />
              <rect
                x={n.x - gn.shortTitle.length * 3.3 - 4}
                y={labelY - 10}
                width={gn.shortTitle.length * 6.6 + 8}
                height={14}
                rx={2}
                className="gv-label-bg"
              />
              <text x={n.x} y={labelY} className="gv-node-title">
                {gn.shortTitle}
              </text>
              {gn.emoji ? (
                <text x={n.x} y={n.y + 7} className="gv-node-emoji">
                  {gn.emoji}
                </text>
              ) : (
                <text x={n.x} y={n.y + 5} className="gv-node-depth">
                  {gn.depth}
                </text>
              )}
            </g>
          );
        })}
        {edges.map((e, i) => (
          <g key={`stubs-${i}`}>
            {/* outgoing stub: from dot inside node down to border */}
            <line x1={e.fromPos.x} y1={e.fromPos.y + 13} x2={e.fromPos.x} y2={e.fromPos.y + 21} className="gv-edge-stub" />
            <circle cx={e.fromPos.x} cy={e.fromPos.y + 13} r={1.5} className="gv-edge-dot" />
            {/* incoming stub: from border up to dot inside node */}
            <line x1={e.toPos.x} y1={e.toPos.y - 21} x2={e.toPos.x} y2={e.toPos.y - 13} className="gv-edge-stub" />
            <circle cx={e.toPos.x} cy={e.toPos.y - 13} r={1.5} className="gv-edge-dot" />
          </g>
        ))}
      </svg>
    </div>
  );
}
