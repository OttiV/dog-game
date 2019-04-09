import { APP_LOADING, APP_LOADED } from "../actions/appStatus";

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true
      };
    case APP_LOADED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

const initialState = {
  loading: false
};
