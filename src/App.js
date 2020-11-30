import React from "react";
import "./styles.css";

const luckyNumber = "7";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Arfin</h1>
      <ul>
        <li>React</li>
        <li>Node</li>
        <li>Jquery</li>
      </ul>
      <p>Your lucky number: {Math.floor(Math.random() * 10)}</p>
    </div>
  );
}
