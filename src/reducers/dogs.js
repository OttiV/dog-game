import { SET_DOG_LIST } from "../actions/Dogslist";

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_DOG_LIST:
      return Object.keys(action.payload).map(breed => {
        return breed;
      });
    default:
      return state;
  }
};
