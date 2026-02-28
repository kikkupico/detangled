import { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen";
import Explorer from "./Explorer";
import { parseGraph } from "./parseGraph";
import type { Graph } from "./types";
import { examples } from "./examples";

export default function App() {
  const [graph, setGraph] = useState<Graph | null>(null);
  const [error, setError] = useState("");

  // Initialize from URL on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#graph/")) {
      const exampleIndex = parseInt(hash.slice(7));
      if (!isNaN(exampleIndex) && examples[exampleIndex]) {
        try {
          const g = parseGraph(examples[exampleIndex].yaml);
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
    }
  }, []);

  // Handle popstate for back button
  useEffect(() => {
    function handlePopState() {
      const hash = window.location.hash;
      if (hash.startsWith("#graph/")) {
        const exampleIndex = parseInt(hash.slice(7));
        if (!isNaN(exampleIndex) && examples[exampleIndex]) {
          try {
            const g = parseGraph(examples[exampleIndex].yaml);
            setGraph(g);
            setError("");
          } catch (e: unknown) {
            setError(e instanceof Error ? e.message : "Failed to parse YAML");
          }
        }
      } else {
        setGraph(null);
      }
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function handleLoad(yaml: string) {
    try {
      const g = parseGraph(yaml);
      if (Object.keys(g.nodes).length === 0) {
        setError("No nodes found in YAML");
        return;
      }
      setError("");
      setGraph(g);

      // Find the example index if it's one of our examples
      const exampleIndex = examples.findIndex((ex) => ex.yaml === yaml);
      if (exampleIndex !== -1) {
        window.history.pushState(null, "", `#graph/${exampleIndex}`);
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to parse YAML");
    }
  }

  function handleBack() {
    window.history.back();
  }

  if (graph) {
    return <Explorer graph={graph} onBack={handleBack} />;
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
