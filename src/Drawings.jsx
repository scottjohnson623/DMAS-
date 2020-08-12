import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listObjects, getSingleObject } from "./utils/index.js";
import axios from "axios";
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
      return { src: "data:image/png;base64," + elem, avgRating: 0, count: 0 };
    });
    let ratings = await axios.get("/ratings");
    ratings = ratings.data;

    ratings.forEach((rating) => {
      let avg = rating.avg;
      avg = avg * 100;
      avg = avg - (avg % 1);
      avg = avg / 100;
      data[rating.art_id - 1]["avgRating"] = avg;
      data[rating.art_id - 1]["count"] = rating.count;
    });
    let datamap = data.map((elem, i) => {
      return (
        <>
          <img
            id={i + 1}
            key={i + 1}
            src={elem.src}
            className="art"
            alt="img"
            onClick={(e) => {
              clickedImage(e.target);
            }}
          />
          <p className="ratings">
            <b> Avg Rating:</b> {elem.avgRating} <b>Votes:</b> {elem.count}
          </p>
        </>
      );
    });
    datamap = datamap.map((elem) => {
      return <div className="artContainer">{elem}</div>;
    });
    dispatch({ type: "SET_IMAGES", payload: datamap });
  }
  useEffect(() => {
    getData();
  }, []);

  //////////////////////
  function clickedImage(image) {
    dispatch({ type: "TOGGLE_ALLIMAGESVIEW" });
    dispatch({ type: "SET_SELECTED_IMAGE", payload: image });
  }

  return <>{images} </>;
}
export default Drawings;
