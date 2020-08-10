import React, { useState } from "react";
import Drawings from "./Drawings";
import "./App.css";
import Canvas from "./Canvas.tsx";
function App() {
  return (
    <div className="App">
      <h1>Does My Art Suck?</h1>
      <Canvas />
      <Drawings />
    </div>
  );
}

export default App;
