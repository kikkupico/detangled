import type { GraphNode } from "./types";

interface Props {
  sortedSiblings: GraphNode[];
  currentId: string;
  onNavigate: (direction: "left" | "right") => void;
  onSelect: (id: string) => void;
}

export default function SiblingCarousel({ sortedSiblings, currentId, onNavigate, onSelect }: Props) {
  if (sortedSiblings.length <= 1) return null;

  const currentIndex = sortedSiblings.findIndex((n) => n.id === currentId);

  return (
    <div className="sibling-carousel">
      <button
        className="nav-arrow-mini left"
        onClick={() => onNavigate("right")}
        disabled={currentIndex === 0}
        aria-label="Previous sibling"
      >
        <svg viewBox="0 0 20 20" width="16" height="16">
          <path d="M12 5 L7 10 L12 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="sibling-dots">
        {sortedSiblings.map((s) => (
          <button
            key={s.id}
            className={`sibling-dot ${s.id === currentId ? "active" : ""}`}
            onClick={() => onSelect(s.id)}
            title={s.shortTitle}
            aria-label={s.shortTitle}
          />
        ))}
      </div>
      <button
        className="nav-arrow-mini right"
        onClick={() => onNavigate("left")}
        disabled={currentIndex === sortedSiblings.length - 1}
        aria-label="Next sibling"
      >
        <svg viewBox="0 0 20 20" width="16" height="16">
          <path d="M8 5 L13 10 L8 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
