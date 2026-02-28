import yaml from "js-yaml";
import type { Graph, GraphNode, GraphMeta } from "./types";

interface RawYaml {
  meta?: { title?: string; description?: string; start?: string[] };
  nodes?: Record<string, { title?: string; short_title?: string; content?: string; parents?: string[] }>;
}

export function parseGraph(yamlStr: string): Graph {
  const raw = yaml.load(yamlStr) as RawYaml | Record<string, unknown>;

  if (!raw || typeof raw !== "object") {
    throw new Error("Invalid YAML: expected a mapping");
  }

  // Support both new format (meta + nodes) and legacy flat format
  let meta: GraphMeta;
  let rawNodes: Record<string, { title?: string; short_title?: string; content?: string; parents?: string[] }>;

  if ("nodes" in raw && raw.nodes && typeof raw.nodes === "object") {
    const r = raw as RawYaml;
    meta = {
      title: r.meta?.title ?? "Untitled Graph",
      description: r.meta?.description ?? "",
      start: r.meta?.start ?? [],
    };
    rawNodes = r.nodes as Record<string, { title?: string; short_title?: string; content?: string; parents?: string[] }>;
  } else {
    // Legacy flat format - all top-level keys are nodes
    meta = { title: "Untitled Graph", description: "", start: [] };
    rawNodes = raw as Record<string, { title?: string; short_title?: string; content?: string; parents?: string[] }>;
  }

  const nodes: Record<string, GraphNode> = {};

  for (const [id, val] of Object.entries(rawNodes)) {
    nodes[id] = {
      id,
      title: val?.title ?? id,
      shortTitle: val?.short_title ?? val?.title ?? id,
      content: val?.content ?? "",
      parents: val?.parents ?? [],
      children: [],
      depth: 0,
      height: 0,
    };
  }

  // Build children lists
  for (const node of Object.values(nodes)) {
    for (const pid of node.parents) {
      if (nodes[pid]) {
        nodes[pid].children.push(node.id);
      }
    }
  }

  // Compute depth (longest path from any root)
  const depthCache = new Map<string, number>();
  function computeDepth(id: string, visited: Set<string>): number {
    if (depthCache.has(id)) return depthCache.get(id)!;
    if (visited.has(id)) return 0;
    visited.add(id);
    const node = nodes[id];
    if (node.parents.length === 0) {
      depthCache.set(id, 0);
      return 0;
    }
    const d =
      1 +
      Math.max(
        ...node.parents
          .filter((p) => nodes[p])
          .map((p) => computeDepth(p, visited))
      );
    depthCache.set(id, d);
    return d;
  }

  // Compute height (longest path to any leaf)
  const heightCache = new Map<string, number>();
  function computeHeight(id: string, visited: Set<string>): number {
    if (heightCache.has(id)) return heightCache.get(id)!;
    if (visited.has(id)) return 0;
    visited.add(id);
    const node = nodes[id];
    if (node.children.length === 0) {
      heightCache.set(id, 0);
      return 0;
    }
    const h =
      1 +
      Math.max(
        ...node.children
          .filter((c) => nodes[c])
          .map((c) => computeHeight(c, visited))
      );
    heightCache.set(id, h);
    return h;
  }

  for (const id of Object.keys(nodes)) {
    nodes[id].depth = computeDepth(id, new Set());
    nodes[id].height = computeHeight(id, new Set());
  }

  const roots = Object.keys(nodes).filter((id) => nodes[id].parents.length === 0);
  const leaves = Object.keys(nodes).filter((id) => nodes[id].children.length === 0);

  // If meta.start is empty, default to roots
  if (meta.start.length === 0) {
    meta.start = roots.length > 0 ? [roots[0]] : [Object.keys(nodes)[0]];
  }

  return { meta, nodes, roots, leaves };
}
