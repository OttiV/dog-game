import request from "superagent";
import { setDogList } from "./Dogslist";

export const SET_ANSWER_DATA = "SET_ANSWER_DATA";
export const SET_ANSWER_IMAGE = "SET_ANSWER_IMAGE";
export const ADD_ANSWER_NAME = "ADD_ANSWER_NAME";
export const SHOW_HINT = "SHOW_HINT";

export const setAnswerData = answerData => {
  return {
    type: "SET_ANSWER_DATA",
    payload: answerData
  };
};

export const showHint = () => {
  return {
    type: "SHOW_HINT"
  };
};

export const setAnswerImage = answerImage => {
  return {
    type: "SET_ANSWER_IMAGE",
    payload: answerImage
  };
};

export const addAnswerName = answerName => {
  return {
    type: ADD_ANSWER_NAME,
    payload: answerName
  };
};

export const setAnswers = () => {
  return (dispatch, getState) => {
    const state = getState();
    let maximum = state.dogs.breeds.length - 3;
    if (state.counter >= 5) {
      maximum = state.dogs.breeds.length - 6;
    }
    if (state.counter >= 10) {
      maximum = state.dogs.breeds.length - 9;
    }

    function getRandom() {
      return Math.floor(Math.random() * maximum);
    }
    const answers = [];
    if (state.counter >= 10) {
      while (answers.length <= 8) {
        const number = getRandom();
        const breed = state.dogs.breeds[number];
        const isAnswer = answers.indexOf(breed) > -1;

        if (!isAnswer) {
          answers.push(breed);
        }
      }
    } else if (state.counter >= 5) {
      while (answers.length <= 5) {
        const number = getRandom();
        const breed = state.dogs.breeds[number];
        const isAnswer = answers.indexOf(breed) > -1;

        if (!isAnswer) {
          answers.push(breed);
        }
      }
    } else {
      while (answers.length <= 2) {
        const number = getRandom();
        const breed = state.dogs.breeds[number];
        const isAnswer = answers.indexOf(breed) > -1;

        if (!isAnswer) {
          answers.push(breed);
        }
      }
    }

    const answerNumber = Math.floor(Math.random() * answers.length);
    const answer = answers[answerNumber];

    dispatch(setAnswerData({ answers, answer, answerNumber }));

    const imageUrl = `https://dog.ceo/api/breed/${encodeURIComponent(
      answer
    )}/images/random`;

    request
      .get(imageUrl)
      .then(response => {
        dispatch(setAnswerImage(response.body.message));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getDogListAndAnswers = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.dogs.breeds.length === 0) {
      request
        .get("https://dog.ceo/api/breeds/list/all")
        .then(response => {
          dispatch(setDogList(response.body.message));
          setAnswers()(dispatch, getState); 
        })
        .catch(error => {
          console.error(error);
          const EMPTY_ARRAY = [];
          dispatch(setDogList(EMPTY_ARRAY));
        });
    } else {
      setAnswers()(dispatch, getState);
    }
  };
};
