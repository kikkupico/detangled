import { useState, useEffect, useRef } from "react";
import type { GraphNode } from "./types";
import "./EdgePane.css";

interface Props {
  nodes: GraphNode[];
  direction: "up" | "down";
  labelFn: (node: GraphNode) => string;
  onSelect: (id: string) => void;
}

export default function EdgePane({ nodes, direction, labelFn, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(480);
  const [svgHeight, setSvgHeight] = useState(100);

  useEffect(() => {
    const updateDimensions = () => {
      const el = containerRef.current;
      if (!el) return;
      setWidth(el.offsetWidth);
      const style = getComputedStyle(el);
      const svgH = el.clientHeight
        - parseFloat(style.paddingTop)
        - parseFloat(style.paddingBottom);
      setSvgHeight(Math.max(50, svgH));
    };

    updateDimensions();
    const ro = new ResizeObserver(updateDimensions);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const count = nodes.length;
  const circleR = 5;
  const titleSpace = 12;
  const stagger = 22;
  const edgeEndY = direction === "up" ? svgHeight + 5 : -5;
  const r = 4; // corner radius
  // Base (un-staggered) circle Y — used to keep the horizontal bus at a fixed level
  const circleCYBase = direction === "up"
    ? circleR + 6 + titleSpace
    : svgHeight - circleR - 6 - titleSpace;
  const turnY = (circleCYBase + edgeEndY) / 2;

  return (
    <div className={`edge-pane ${direction} ${nodes.length === 0 ? "empty" : ""}`} ref={containerRef}>
      {nodes.length > 0 && (
        <svg
          className="edge-svg"
          viewBox={`0 0 ${width} ${svgHeight}`}
          preserveAspectRatio="none"
        >
          {nodes.map((node, i) => {
            const cx = ((i + 1) / (count + 1)) * width;
            const midX = width / 2;

            // Alternate Y position so adjacent labels don't overlap
            const staggerOffset = (i % 2) * stagger;
            const cy = direction === "up"
              ? circleR + 6 + titleSpace + staggerOffset
              : svgHeight - circleR - 6 - titleSpace - staggerOffset;

            const startY = direction === "up" ? cy + circleR : cy - circleR;
            const dirSign = direction === "up" ? 1 : -1;
            const hDir = midX > cx ? 1 : midX < cx ? -1 : 0;

            let path: string;
            if (hDir === 0) {
              path = `M ${cx} ${startY} L ${midX} ${edgeEndY}`;
            } else {
              path = [
                `M ${cx} ${startY}`,
                `L ${cx} ${turnY - r * dirSign}`,
                `Q ${cx} ${turnY}, ${cx + r * hDir} ${turnY}`,
                `L ${midX - r * hDir} ${turnY}`,
                `Q ${midX} ${turnY}, ${midX} ${turnY + r * dirSign}`,
                `L ${midX} ${edgeEndY}`,
              ].join(" ");
            }

            const labelY = direction === "up" ? cy - circleR - 6 : cy + circleR + 16;

            return (
              <g
                key={node.id}
                className="edge-group"
                onClick={() => onSelect(node.id)}
                style={{ cursor: "pointer" }}
              >
                <path d={path} className="edge-line" />
                <circle cx={cx} cy={cy} r={circleR} className="edge-circle" />
                <text x={cx} y={labelY} className="edge-title-text">
                  {node.shortTitle}{labelFn(node) !== "0" && ` +${labelFn(node)}`}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
