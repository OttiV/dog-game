import request from "superagent";

export const SET_ANSWER_DATA = "SET_ANSWER_DATA";
export const SET_ANSWER_IMAGE = "SET_ANSWER_IMAGE";

export const setAnswerData = answerData => {
  return {
    type: "SET_ANSWER_DATA",
    payload: answerData
  };
};

export const setAnswerImage = answerImage => {
  return {
    type: "SET_ANSWER_IMAGE",
    payload: answerImage
  };
};

export const setAnswers = () => {
  return (dispatch, getState) => {
    const state = getState();
    const maximum = state.dogs.breeds.length - 1;
    function getRandom() {
      return Math.floor(Math.random() * maximum);
    }

    const answers = [];
    for (let i = 0; i < 3; i++) {
      const number = getRandom();
      const breeds = state.dogs.breeds[number];
      answers.push(breeds);
    }

    const answerNumber = Math.floor(Math.random() * answers.length);
    const answer = answers[answerNumber];

    dispatch(setAnswerData({ answers, answer, answerNumber }));

    const imageUrl = `https://dog.ceo/api/breed/${encodeURIComponent(
      answer
    )}/images/random`; // Maybe this will need encodeURIComponent?

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
