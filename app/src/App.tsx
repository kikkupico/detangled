import { useState } from "react";
import HomeScreen from "./HomeScreen";
import Explorer from "./Explorer";
import { parseGraph } from "./parseGraph";
import type { Graph } from "./types";

export default function App() {
  const [graph, setGraph] = useState<Graph | null>(null);
  const [error, setError] = useState("");

  function handleLoad(yaml: string) {
    try {
      const g = parseGraph(yaml);
      if (Object.keys(g.nodes).length === 0) {
        setError("No nodes found in YAML");
        return;
      }
      setError("");
      setGraph(g);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to parse YAML");
    }
  }

  if (graph) {
    return <Explorer graph={graph} onBack={() => setGraph(null)} />;
  }

  return (
    <>
      <HomeScreen onLoad={handleLoad} />
      {error && (
        <p style={{ color: "#e74c3c", textAlign: "center", fontSize: "0.85rem" }}>
          {error}
        </p>
      )}
    </>
  );
}
