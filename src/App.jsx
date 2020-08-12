import React, { useEffect } from "react";
import Drawings from "./components/Drawings";
import "./styles/App.css";
import "./styles/loader.css";
import Canvas from "./components/Canvas.tsx";
import { click, canvasFill } from "./utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import Rating from "./components/Rating.jsx";

export function App() {
  let allImagesView = useSelector((state) => {
    return state.allImagesView;
  });
  let loaded = useSelector((state) => {
    return state.loaded;
  });
  const dispatch = useDispatch();
  let allImages = () => {
    dispatch({ type: "SET_ALLIMAGESVIEW" });
  };
  useEffect(() => {
    canvasFill();
  }, []);
  return (
    <div className="App">
      <a className="header" onClick={allImages}>
        Does My Art Suck?
      </a>
      {allImagesView ? (
        <div>
          <Canvas />
          <button className="postbutton" onClick={click}>
            FULL SEND
          </button>
          <div className="drawings">
            {loaded ? <></> : <div className="loader"></div>}
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
