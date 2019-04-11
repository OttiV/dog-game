import request from "superagent";
import { setDogList } from "./Dogslist";

export const SET_ANSWER_DATA = "SET_ANSWER_DATA";
export const SET_ANSWER_IMAGE = "SET_ANSWER_IMAGE";
export const ADD_ANSWER_NAME = "ADD_ANSWER_NAME";

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

export const addAnswerName = answerName => {
  console.log('answerName test:', answerName)
  return {
    type: ADD_ANSWER_NAME,
    payload: answerName
  };
};


// class AddPizzaFormContainer extends React.Component {
//   addPizza = pizza => {
//     this.props.dispatch({
//       type: "ADD_PIZZA",
//       payload: {
//         id: Math.ceil(Math.random() * 10000),
//         ...pizza
//       }
//     });
//   };

//   render() {
//     return <AddPizzaForm addPizza={this.addPizza} />;
//   }
// }



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

export const getDogListAndAnswers = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.dogs.breeds.length === 0) {
      request
        .get("https://dog.ceo/api/breeds/list/all")
        .then(response => {
          dispatch(setDogList(response.body.message));
          setAnswers()(dispatch, getState); // looks weird, but works
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
