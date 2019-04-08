import { SET_DOG_LIST } from "../actions/DogslistA";

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_DOG_LIST:
      return action.payload.map(breed => {
        return { ...breed };
      });
    default:
      return state;
  }
};
