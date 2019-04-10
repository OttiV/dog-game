import { appLoading, appLoaded } from "./appStatus";
import request from "superagent";

export const SET_DOG_IMAGES = "SET_DOG_IMAGES";

export const setDogImages = images => {
  return {
    type: SET_DOG_IMAGES,
    payload: images
  };
};

export const getGameOne = breed => {
  return dispatch => {
    dispatch(appLoading());

    request
      .get(
        `https://dog.ceo/api/breeds/${encodeURIComponent(breed)}/image/random/`
      )
      .then(response => {
        dispatch(setDogImages(response.body.message));
        dispatch(appLoaded());
      })
      .catch(error => {
        console.error(error);
        const EMPTY_ARRAY = [];
        dispatch(setDogImages(EMPTY_ARRAY));
        dispatch(appLoaded());
      });
  };
};
