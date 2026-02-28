import type { GraphNode } from "./types";
import "./EdgePane.css";

interface Props {
  nodes: GraphNode[];
  direction: "up" | "down";
  labelFn: (node: GraphNode) => string;
  onSelect: (id: string) => void;
}

export default function EdgePane({ nodes, direction, labelFn, onSelect }: Props) {
  if (nodes.length === 0) {
    return <div className={`edge-pane ${direction} empty`} />;
  }

  const count = nodes.length;
  const svgHeight = 50;
  const circleR = 5;
  const titleSpace = direction === "up" ? 12 : 0;
  const circleCY = direction === "up" ? circleR + 6 + titleSpace : svgHeight - circleR - 6;
  const edgeEndY = direction === "up" ? svgHeight : 0;
  const r = 4; // corner radius

  return (
    <div className={`edge-pane ${direction}`}>
      <svg
        className="edge-svg"
        viewBox={`0 0 480 ${svgHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {nodes.map((node, i) => {
          const cx = ((i + 1) / (count + 1)) * 480;
          const midX = 240;

          // Right-angle path with rounded corners
          const turnY = (circleCY + edgeEndY) / 2;
          const startY = direction === "up" ? circleCY + circleR : circleCY - circleR;
          const dirSign = direction === "up" ? 1 : -1;
          const hDir = midX > cx ? 1 : midX < cx ? -1 : 0;

          let path: string;
          if (hDir === 0) {
            // Straight vertical line when circle is centered
            path = `M ${cx} ${startY} L ${midX} ${edgeEndY}`;
          } else {
            // Vertical from circle -> rounded turn -> horizontal -> rounded turn -> vertical to edge
            path = [
              `M ${cx} ${startY}`,
              `L ${cx} ${turnY - r * dirSign}`,
              `Q ${cx} ${turnY}, ${cx + r * hDir} ${turnY}`,
              `L ${midX - r * hDir} ${turnY}`,
              `Q ${midX} ${turnY}, ${midX} ${turnY + r * dirSign}`,
              `L ${midX} ${edgeEndY}`,
            ].join(" ");
          }

          return (
            <g
              key={node.id}
              className="edge-group"
              onClick={() => onSelect(node.id)}
              style={{ cursor: "pointer" }}
            >
              <path d={path} className="edge-line" />
              <circle cx={cx} cy={circleCY} r={circleR} className="edge-circle" />
              {direction === "up" && (
                <text x={cx} y={circleCY - circleR - 4} className="edge-title-text">
                  {node.shortTitle}
                </text>
              )}
              <text x={cx + circleR + 5} y={circleCY + 4} className="edge-label">
                {labelFn(node)}
              </text>
            </g>
          );
        })}
      </svg>
      {direction === "down" && (
        <div className="edge-titles">
          {nodes.map((node, i) => (
            <button
              key={node.id}
              className="edge-title-btn"
              style={{ left: `${((i + 1) / (count + 1)) * 100}%` }}
              onClick={() => onSelect(node.id)}
              title={node.title}
            >
              {node.shortTitle}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
