import type { GraphNode } from "./types";
import "./NodePane.css";

interface Props {
  node: GraphNode;
}

export default function NodePane({ node }: Props) {
  return (
    <div className="node-pane">
      <h2 className="node-title">{node.title}</h2>
      <div className="node-content">
        {node.content.split("\n").map((line, i) => (
          <p key={i}>{line || "\u00A0"}</p>
        ))}
      </div>
      <div className="node-id">{node.id}</div>
    </div>
  );
}
