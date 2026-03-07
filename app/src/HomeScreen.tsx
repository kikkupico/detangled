import { useState } from "react";
import { examples } from "./examples";
import "./HomeScreen.css";

interface Props {
  onLoad: (yaml: string) => void;
}

export default function HomeScreen({ onLoad }: Props) {
  const [yaml, setYaml] = useState("");
  const [error, setError] = useState("");

  function handleLoad() {
    if (!yaml.trim()) {
      setError("Please paste some YAML content");
      return;
    }
    setError("");
    onLoad(yaml);
  }

  return (
    <div className="home">
      <img src="./logo.jpg" alt="detangled" className="home-logo ambient amb-elevation-1" />
      <p className="home-subtitle">Explore structured knowledge as a graph</p>

      <textarea
        className="home-textarea ambient amb-elevation-1"
        placeholder="Paste your YAML here..."
        value={yaml}
        onChange={(e) => {
          setYaml(e.target.value);
          setError("");
        }}
      />

      {error && <p className="home-error">{error}</p>}

      <button className="home-btn primary ambient amb-elevation-1" onClick={handleLoad}>
        Visualise
      </button>

      <div className="home-examples">
        <p className="home-examples-label">Or try an example:</p>
        {examples.map((ex) => (
          <button
            key={ex.name}
            className="home-btn example ambient amb-elevation-1"
            onClick={() => onLoad(ex.yaml)}
          >
            {ex.name}
          </button>
        ))}
      </div>
    </div>
  );
}
