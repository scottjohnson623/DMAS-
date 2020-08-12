// import * as React from "react";
// type Coordinates = {
//   x: number;
//   y: number;
// };

// function App() {
//   const canvasRef = React.useRef<HTMLCanvasElement>(null);
//   const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(
//     null
//   );

//   React.useEffect(() => {
//     let touchStart: boolean = false;
//     let start: Coordinates = { x: 0, y: 0 };
//     let end: Coordinates = { x: 0, y: 0 };
//     let canvasOffsetLeft: number = 0;
//     let canvasOffsetTop: number = 0;

//     function handletouchStart(evt: TouchEvent) {
//       touchStart = true;

//       start = {
//         x: evt.clientX - canvasOffsetLeft,
//         y: evt.clientY - canvasOffsetTop,
//       };

//       end = {
//         x: evt.clientX - canvasOffsetLeft,
//         y: evt.clientY - canvasOffsetTop,
//       };
//     }

//     function handletouchEnd(evt: TouchEvent) {
//       touchStart = false;
//     }

//     function handletouchmove(evt: TouchEvent) {
//       if (touchStart && context) {
//         start = {
//           x: end.x,
//           y: end.y,
//         };

//         end = {
//           x: evt.clientX - canvasOffsetLeft,
//           y: evt.clientY - canvasOffsetTop,
//         };

//         // Draw our path
//         context.beginPath();
//         context.moveTo(start.x, start.y);
//         context.lineTo(end.x, end.y);
//         context.strokeStyle = `#235199`;
//         context.lineWidth = 3;
//         context.stroke();
//         context.closePath();
//       }
//     }

//     // function randomColor(): string {
//     //   const color = new Array<string>(6);

//     //   for (let i = 0; i < 6; i++) {
//     //     const val = Math.floor(Math.random() * 16);

//     //     if (val < 10) {
//     //       color[i] = val.toString();
//     //     } else {
//     //       color[i] = String.fromCharCode(val + 87);
//     //     }
//     //   }

//     //   return color.join("");
//     // }

//     if (canvasRef.current) {
//       const renderCtx = canvasRef.current.getContext("2d");

//       if (renderCtx) {
//         canvasRef.current.addEventListener("touchstart", handletouchStart);
//         canvasRef.current.addEventListener("touchend", handletouchEnd);
//         canvasRef.current.addEventListener("touchmove", handletouchmove);

//         canvasOffsetLeft = canvasRef.current.offsetLeft;
//         canvasOffsetTop = canvasRef.current.offsetTop;

//         setContext(renderCtx);
//       }
//     }

//     return function cleanup() {
//       if (canvasRef.current) {
//         canvasRef.current.removeEventListener("touchstart", handletouchStart);
//         canvasRef.current.removeEventListener("touchend", handletouchEnd);
//         canvasRef.current.removeEventListener("touchmove", handletouchmove);
//       }
//     };
//   }, [context]);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//       }}
//     >
//       <canvas
//         id="canvas"
//         ref={canvasRef}
//         width={500}
//         height={500}
//         style={{
//           border: "2px solid #000",
//           marginTop: 10,
//         }}
//       ></canvas>
//     </div>
//   );
// }

// export default App;
