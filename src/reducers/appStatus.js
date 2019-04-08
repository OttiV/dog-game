import { APP_LOADING, APP_DONE_LOADING } from "../actions/appStatus";

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true
      };
    case APP_DONE_LOADING:
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
