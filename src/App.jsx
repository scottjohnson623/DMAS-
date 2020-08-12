import React, { useEffect } from "react";
import Drawings from "./Drawings";
import "./App.css";
import Canvas from "./Canvas.tsx";
import { click, canvasFill } from "./utils/helpers";
import { useSelector, useDispatch } from "react-redux";
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
      <a className="header" onClick={}>
        Does My Art Suck?
      </a>

      {allImagesView ? (
        <div>
          <Canvas />
          <button className="postbutton" onClick={click}>
            FULL SEND
          </button>
          <div className="drawings">
            <Drawings />
          </div>
        </div>
      ) : (
        <Rating />
      )}
    </div>
  );
}

export default App;
