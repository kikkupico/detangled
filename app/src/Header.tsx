import type { Graph } from "./types";

interface Props {
  graph: Graph;
  showGraph: boolean;
  onBack: () => void;
  onToggleView: () => void;
}

export default function Header({ graph, showGraph, onBack, onToggleView }: Props) {
  const graphIconSvg = (
    <svg className="header-icon-svg" viewBox="0 0 20 20" width="20" height="20">
      <circle cx="10" cy="4" r="2.5" />
      <circle cx="5" cy="14" r="2.5" />
      <circle cx="15" cy="14" r="2.5" />
      <line x1="10" y1="6.5" x2="5" y2="11.5" />
      <line x1="10" y1="6.5" x2="15" y2="11.5" />
    </svg>
  );

  const pageIconSvg = (
    <svg className="header-icon-svg" viewBox="0 0 20 20" width="20" height="20">
      <rect x="3" y="2" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="14" x2="11" y2="14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );

  return (
    <div className="header-bar">
      <button className="header-btn" onClick={onBack} title="Back to home" aria-label="Back">
        <svg className="header-icon-svg" viewBox="0 0 20 20" width="20" height="20">
          <path d="M10 3 L3 9 V17 H8 V12 H12 V17 H17 V9 L10 3 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <span className="header-title">{graph.meta.title}</span>
      <button
        className="header-btn"
        onClick={onToggleView}
        title={showGraph ? "Details view" : "Graph view"}
        aria-label={showGraph ? "Details view" : "Graph view"}
      >
        {showGraph ? pageIconSvg : graphIconSvg}
      </button>
    </div>
  );
}
