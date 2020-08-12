import { saveObject } from "./index";
import axios from "axios";

export async function click() {
  var canvas = document.getElementById("canvas");
  let id = await axios.get("/lastid");
  id = id.data + 1;
  let name = "photo" + id;
  canvas.toBlob(
    (blob) => {
      saveObject({ name: `${name}.png`, src: blob }).then(() =>
        console.log("Uploaded")
      );
    },
    "image/png",
    1.0
  );
  await axios.post("/art");
}

export function canvasFill() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
