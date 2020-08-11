import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listObjects, getSingleObject } from "./utils/index.js";
function Drawings() {
  let images = useSelector((state) => {
    return state.images;
  });
  let dispatch = useDispatch();

  //loading photos from AWS

  async function getData() {
    let objects = await listObjects();
    let images = objects.map((elem) => {
      return getSingleObject(elem.Key);
    });
    let data = await Promise.all(images);
    data = data.map((elem) => {
      return "data:image/png;base64," + elem;
    });
    data = data.map((elem, i) => {
      return (
        <img
          id={i + 1}
          key={i + 1}
          src={elem}
          className="art"
          alt="img"
          onClick={(e) => {
            clickedImage(e.target);
          }}
        />
      );
    });
    dispatch({ type: "SET_IMAGES", payload: data });
  }
  useEffect(() => {
    getData();
  }, []);

  //////////////////////
  function clickedImage(image) {
    console.log(image.src);
    dispatch({ type: "TOGGLE_ALLIMAGESVIEW" });
    dispatch({ type: "SET_SELECTED_IMAGE", payload: image });
  }

  return <>{images} </>;
}
export default Drawings;
