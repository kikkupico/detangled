export interface GraphNode {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  content: string;
  parents: string[];
  children: string[];
  depth: number; // longest path from a root to this node
  height: number; // longest path from this node to a leaf
}

export interface GraphMeta {
  title: string;
  description: string;
  start: string[];
}

export interface Graph {
  meta: GraphMeta;
  nodes: Record<string, GraphNode>;
  roots: string[]; // nodes with no parents
  leaves: string[]; // nodes with no children
}
