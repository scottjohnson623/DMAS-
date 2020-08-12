import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Rating() {
  let image = useSelector((state) => {
    return state.selectedImage;
  });
  function MakeButtons() {
    let ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return ratings.map((elem) => {
      return (
        <button
          className="myButton"
          onClick={() => {
            addRating(elem);
          }}
        >
          {elem}
        </button>
      );
    });
  }
  async function addRating(rating) {
    console.log(image.id, rating);
    await axios.post(`/rating/${image.id}/${rating}`);
  }
  return (
    <>
      <div>
        <img
          className="singleImage"
          src={image.src}
          key={image.key}
          id={image.id}
          alt="pic"
        />
        <br />
        <MakeButtons />
      </div>
    </>
  );
}
