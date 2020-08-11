import { createStore } from "redux";

const initialState = {
  images: [],
  selectedImage: "",
  allImagesView: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_IMAGES": {
      return { ...state, images: action.payload };
    }
    case "SET_SELECTED_IMAGE": {
      return { ...state, selectedImage: action.payload };
    }
    case "TOGGLE_ALLIMAGESVIEW": {
      return { ...state, allImagesView: !state.allImagesView };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
