import { SET_DOG_LIST } from "../actions/Dogslist";
import { SET_DOG_IMAGES } from "../actions/DogsImages";

export default (state = initialState, action = {}) => {
  // console.log("STATE:", state, "ACTION:", action);
  switch (action.type) {
    case SET_DOG_LIST:
      return {
        ...state,
        breeds: Object.keys(action.payload)
      };
    case SET_DOG_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  breeds: [],
  images: []
};
