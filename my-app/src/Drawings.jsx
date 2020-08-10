import React, { useState } from "react";
import { listObjects, getSingleObject } from "./utils/index.js";
function Drawings() {
  let [image, setImage] = useState("");
  async function getData() {
    let objects = await listObjects();
    console.log(objects);
    let images = await getSingleObject(objects[0].Key);
    setImage("data:image/png;base64," + images);
  }
  getData();
  return (
    <>
      <img src={image} />{" "}
    </>
  );
}
export default Drawings;
