import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hello } from "./Hello";
import { Card } from "./Card/card";
import { Hooks } from "./Card/Hooks/Hooks";
import "./Card/card.css";
import { Inputfeld } from "./input feld/inputfeld";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hooks />
      <Inputfeld />
      <Hello name={"World"} question={"Wie gehts?"} />
      <Hello name={"Earth"} />
      <Hello name={"Saturn"} />
      <Card
        title={"React"}
        link={"https://react.dev"}
        logo={<img src={reactLogo} />}
      />
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
