import React, { useState, useEffect } from "react";
import { listObjects, getSingleObject } from "./utils/index.js";
function Drawings() {
  let [images, setImages] = useState("");
  async function getData() {
    let objects = await listObjects();
    let images = objects.map((elem) => {
      return getSingleObject(elem.Key);
    });
    console.log(images);
    let data = await Promise.all(images);
    console.log(data);
    data = data.map((elem) => {
      return "data:image/png;base64," + elem;
    });
    data = data.map((elem) => {
      return <img src={elem} />;
    });
    setImages(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return <>{images} </>;
}
export default Drawings;
