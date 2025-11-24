import { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const numA = parseFloat(a || "0");
  const numB = parseFloat(b || "0");
  const sum = numA + numB;

  return (
    <div className="app">
      <h1>CI/CD + Kubernetes Demo</h1>
      <h2>Add two numbers</h2>

      <div className="inputs">
        <div>
          <label>Number A</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div>
          <label>Number B</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </div>

      <div className="result">
        <span>Result:</span> <strong>{sum}</strong>
      </div>
    </div>
  );
}

export default App;
