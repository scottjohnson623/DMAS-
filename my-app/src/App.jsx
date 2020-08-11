import React, { useState, useEffect } from "react";
import Drawings from "./Drawings";
import "./App.css";
import Canvas from "./Canvas.tsx";
import { saveObject } from "./utils/index";
import { click, canvasFill } from "./utils/helpers";
export function App() {
  useEffect(() => {
    canvasFill();
  }, []);
  return (
    <div className="App">
      <button onClick={click} />

      <h1>Does My Art Suck?</h1>
      <Canvas />
      <Drawings />
    </div>
  );
}

export default App;
