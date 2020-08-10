import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { listObjects, getSingleObject } from "./utils/index.js";

function App() {
  let [image, setImage] = useState("");
  async function getData() {
    let objects = await listObjects();
    console.log(objects);
    let images = await getSingleObject(objects[0].Key);
    setImage("data:image/png;base64," + images);
  }
  getData();
  return (
    <div className="App">
      <h1>Does My Art Suck?</h1>
      <img src={image} />{" "}
    </div>
  );
}

export default App;
