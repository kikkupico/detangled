import { useRef, useEffect } from "react";
import Markdown from "react-markdown";
import type { GraphNode } from "./types";
import "./NodePane.css";

interface Props {
  node: GraphNode;
  prevSibling: GraphNode | null;
  nextSibling: GraphNode | null;
  onNavigate: (direction: "left" | "right") => void;
}

export default function NodePane({ node, prevSibling, nextSibling, onNavigate }: Props) {
  const paneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paneRef.current) paneRef.current.scrollTop = 0;
  }, [node.id]);

  return (
    <div className="node-pane" ref={paneRef}>
      <div className="node-nav-header">
        {prevSibling ? (
          <button 
            className="node-nav-btn left" 
            onClick={() => onNavigate("right")}
            title={`Previous: ${prevSibling.shortTitle}`}
          >
            <svg viewBox="0 0 20 20" width="14" height="14">
              <path d="M12 5 L7 10 L12 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{prevSibling.shortTitle}</span>
          </button>
        ) : <div className="node-nav-spacer" />}

        <div className="node-short-title">{node.shortTitle}</div>

        {nextSibling ? (
          <button 
            className="node-nav-btn right" 
            onClick={() => onNavigate("left")}
            title={`Next: ${nextSibling.shortTitle}`}
          >
            <span>{nextSibling.shortTitle}</span>
            <svg viewBox="0 0 20 20" width="14" height="14">
              <path d="M8 5 L13 10 L8 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : <div className="node-nav-spacer" />}
      </div>

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
