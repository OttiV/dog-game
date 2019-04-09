import request from "superagent";
import { appLoading, appLoaded } from "./appStatus";

export const SET_DOG_LIST = "SET_DOG_LIST";

export const setDogList = breeds => {
  return {
    type: SET_DOG_LIST,
    payload: breeds
  };
};

export const getDogList = () => {
  return dispatch => {
    dispatch(appLoading());
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        dispatch(setDogList(response.body.message));
        dispatch(appLoaded());
      })
      .catch(error => {
        console.error(error);
        const EMPTY_ARRAY = [];
        dispatch(setDogList(EMPTY_ARRAY));
        dispatch(appLoaded());
      });
  };
};
