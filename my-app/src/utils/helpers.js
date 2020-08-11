import { saveObject } from "./index";

export function click() {
  console.log("helo");
  var canvas = document.getElementById("canvas");
  console.log(canvas);
  canvas.toBlob(
    (blob) => {
      saveObject({ name: "test3.png", src: blob }).then(() =>
        console.log("done")
      );
    },
    "image/png",
    1.0
  );
}

export function canvasFill() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
