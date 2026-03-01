import type { GraphNode } from "./types";

interface Props {
  sortedSiblings: GraphNode[];
  currentId: string;
  onNavigate: (direction: "left" | "right") => void;
}

export default function SiblingCarousel({ sortedSiblings, currentId, onNavigate }: Props) {
  if (sortedSiblings.length <= 1) return null;

  const currentIndex = sortedSiblings.findIndex((n) => n.id === currentId);
  const prevSibling = currentIndex > 0 ? sortedSiblings[currentIndex - 1] : null;
  const nextSibling = currentIndex < sortedSiblings.length - 1 ? sortedSiblings[currentIndex + 1] : null;

  return (
    <div className="sibling-carousel">
      {prevSibling ? (
        <button
          className="nav-btn-mini left"
          onClick={() => onNavigate("right")}
          aria-label={`Previous: ${prevSibling.shortTitle}`}
        >
          <svg viewBox="0 0 20 20" width="16" height="16" className="nav-arrow-svg">
            <path d="M12 5 L7 10 L12 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="nav-btn-label">{prevSibling.shortTitle}</span>
        </button>
      ) : (
        <div className="nav-btn-spacer" />
      )}

      <div className="sibling-divider" />

      {nextSibling ? (
        <button
          className="nav-btn-mini right"
          onClick={() => onNavigate("left")}
          aria-label={`Next: ${nextSibling.shortTitle}`}
        >
          <span className="nav-btn-label">{nextSibling.shortTitle}</span>
          <svg viewBox="0 0 20 20" width="16" height="16" className="nav-arrow-svg">
            <path d="M8 5 L13 10 L8 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : (
        <div className="nav-btn-spacer" />
      )}
    </div>
  );
}
