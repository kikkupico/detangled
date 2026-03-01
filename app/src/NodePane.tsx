import { useRef, useEffect } from "react";
import Markdown from "react-markdown";
import type { GraphNode } from "./types";
import "./NodePane.css";

interface Props {
  node: GraphNode;
}

export default function NodePane({ node }: Props) {
  const paneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paneRef.current) paneRef.current.scrollTop = 0;
  }, [node.id]);

  return (
    <div className="node-pane" ref={paneRef}>
      <div className="node-short-title">{node.shortTitle}</div>
      <h2 className="node-title">
        {node.emoji && <span className="node-emoji">{node.emoji}</span>}
        {node.title}
      </h2>
      <div className="node-content">
        <Markdown>{node.content}</Markdown>
      </div>
    </div>
  );
}
