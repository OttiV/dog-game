import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
// import { getGameOne } from "../../actions/GameOne";
import { connect } from "react-redux";
import { getDogListAndAnswers } from "../../actions/GameOne";
import "./GameOne.css";

class GameOne extends Component {
  componentDidMount() {
    this.props.getDogListAndAnswers();
  }
  handleClick = dog => {
    console.log("Answer is:", this.props.answer === dog ? "Right" : "Wrong");
    // this.props.dispatch({
    // type: "ADD_ANSWER",
    // payload: [] //what should we state??
    // });
  };

  render() {
    console.log(this.props);
    if (this.props.loading) {
      return <LoadingModal />;
    }

    return (
      <div className="game-one">
        <h1>GAME 1</h1>
        <Link to="/">
          <button className="GameOneButtons">HOME</button>
        </Link>
        <Link to="/dog-breeds/">
          <button className="GameOneButtons">STUDY</button>
        </Link>
        <div>
          <img
            className="AnswerImage"
            src={this.props.answerImage}
            alt={this.props.answer}
          />
        </div>
        <div>
          {this.props.answers &&
            this.props.answers.map(dog => {
              return (
                <button
                  className="GameOneButtons"
                  onClick={() => this.handleClick(dog)}
                  key={this.props.breeds.breeds}
                >
                  {dog.charAt(0).toUpperCase() + dog.slice(1)}
                </button>
              );
            })}
          {this.props.breeds.length === 0 && "Loading..."}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    breeds: state.dogs.breeds,
    answers: state.dogs.answers,
    answer: state.dogs.answer,
    loading: state.appStatus.loading,
    answerImage: state.dogs.answerImage
  };
};

export default connect(
  mapStateToProps,
  { getDogListAndAnswers }
)(GameOne);
