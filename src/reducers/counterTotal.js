import { INCREMENT_TOTAL } from "../actions/counterTotal";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_TOTAL:
      return state + 1;

    default:
      return state;
  }
};
