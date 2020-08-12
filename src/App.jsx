import React, { useEffect } from "react";
import Drawings from "./components/Drawings";
import "./styles/App.css";
import Canvas from "./components/Canvas.tsx";
import { click, canvasFill } from "./utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import Rating from "./components/Rating.jsx";
import { useMediaQuery } from "react-responsive";

export function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  let allImagesView = useSelector((state) => {
    return state.allImagesView;
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
