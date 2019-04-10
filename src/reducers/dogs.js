import { SET_DOG_LIST } from "../actions/Dogslist";
import { SET_DOG_IMAGES } from "../actions/DogsImages";
import { SET_ANSWER_DATA } from "../actions/GameOne";
import { SET_ANSWER_IMAGE } from "../actions/GameOne";

export default (state = initialState, action = {}) => {
  // console.log("STATE:", state, "ACTION:", action);
  switch (action.type) {
    case SET_DOG_LIST:
      return {
        ...state,
        breeds: Object.keys(action.payload)
      };
    case SET_DOG_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    case SET_ANSWER_DATA:
      return {
        ...state,
        answers: action.payload.answers,
        answer: action.payload.answer,
        answerNumber: action.payload.answerNumber
      };
    case SET_ANSWER_IMAGE:
      return {
        ...state,
        answerImage: action.payload
      };

    default:
      return state;
  }
};

const initialState = {
  breeds: [],
  images: [],
  answers: [],
  answer: null,
  answerNumber: null,
  answerImage: null
};
