import Markdown from "react-markdown";
import type { GraphNode } from "./types";
import "./NodePane.css";

interface Props {
  node: GraphNode;
}

export default function NodePane({ node }: Props) {
  return (
    <div className="node-pane">
      <h2 className="node-title">{node.emoji && <span className="node-emoji">{node.emoji}</span>}{node.title}</h2>
      <div className="node-content">
        <Markdown>{node.content}</Markdown>
      </div>
      <div className="node-id">{node.id}</div>
    </div>
  );
}
