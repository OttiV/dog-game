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
  handleClick = event => {
    this.props.dispatch({
      type: "ADD_ANSWER",
      payload: [] //what should we state??
    });
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
          <button>HOME</button>
        </Link>
        <Link to="/dog-breeds/">
          <button>STUDY</button>
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
                  onClick={this.handleClick}
                  key={this.props.breeds.breeds}
                >
                  {dog}
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
    loading: state.appStatus.loading,
    answerImage: state.dogs.answerImage
  };
};

export default connect(
  mapStateToProps,
  { getDogListAndAnswers }
)(GameOne);
