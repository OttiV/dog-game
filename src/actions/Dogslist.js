import request from "superagent";
import { appIsLoading, appIsDoneLoading } from "./appStatus";

export const SET_DOG_LIST = "SET_DOG_LIST";

export const setDogList = breeds => {
  return {
    type: SET_DOG_LIST,
    payload: breeds
  };
};

export const getDogList = () => {
  return dispatch => {
    dispatch(appIsLoading());
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        dispatch(setDogList(response.body));
        dispatch(appIsDoneLoading());
      })
      .catch(error => {
        console.error(error);
        const EMPTY_ARRAY = [];
        dispatch(setDogList(EMPTY_ARRAY));
        dispatch(appIsDoneLoading());
      });
  };
};
