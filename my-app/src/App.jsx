import React, { useEffect } from "react";
import Drawings from "./Drawings";
import "./App.css";
import Canvas from "./Canvas.tsx";
import { click, canvasFill } from "./utils/helpers";
import { useSelector } from "react-redux";
import Rating from "./Rating.jsx";
export function App() {
  let allImagesView = useSelector((state) => {
    return state.allImagesView;
  });
  useEffect(() => {
    canvasFill();
  }, []);
  return (
    <div className="App">
      <header className="header">Does My Art Suck?</header>

      <div className="drawings">
        {allImagesView ? (
          <div>
            <Canvas />
            <button className="postbutton" onClick={click}>
              SEND IT
            </button>{" "}
            <Drawings />
          </div>
        ) : (
          <Rating />
        )}
      </div>
    </div>
  );
}

export default App;
