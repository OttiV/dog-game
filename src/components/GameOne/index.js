import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
//import { getGameOne } from "../../actions/GameOne";
import { connect } from "react-redux";
import {
  getDogListAndAnswers,
  setAnswers,
  addAnswerName,
  deleteAnswerName,
  showHint
} from "../../actions/GameOne";
import { increment } from "../../actions/counter";
import { incrementTotal } from "../../actions/counterTotal";
import "./GameOne.css";

class GameOne extends Component {
  componentDidMount() {
    this.props.getDogListAndAnswers();
  }
  incrementCounter = () => {
    this.props.increment();
  };

  percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  handleClick = dog => {
    this.props.incrementTotal();
    if (this.props.hint === true) {
      this.props.showHint();
    }
    if (this.props.answer === dog) {
      this.incrementCounter();
      this.props.setAnswers();
    } else {
      // this.props.decrement();
      this.props.addAnswerName(this.props.answer);
      setTimeout(() => {
        this.props.setAnswers();
        this.props.deleteAnswerName();
      }, 2000);
    }
  };

  render() {
    
    const answeredRight = this.props.counter;
    const timeAnswered = this.props.counterTotal;
    const percentageRight = Math.floor(
      this.percentage(answeredRight, timeAnswered)
    );

    const rightAnswer = this.props.answerName;
    if (this.props.loading) {
      return <LoadingModal />;
    }

    const showHint = this.props.counter >= 5 && this.props.hint;
    console.log("this.props.hint test", this.props.hint);
    console.log("answer test:", this.props.answer);

    return (
      <div className="game-one">
        <h1>GAME ONE</h1>
        <Link to="/">
          <button
            className="GameOneButtons"
          >
            HOME
          </button>
        </Link>
        <Link to="/dog-breeds/">
          <button className="GameOneButtons">STUDY</button>
        </Link>
        {this.props.counterTotal >= 1 && (
          <div className="scoreboard">
            <h1>SCOREBOARD: {percentageRight} %</h1>
          </div>
        )}
        <div>
          <img
            className="AnswerImage"
            src={this.props.answerImage}
            alt={this.props.answer}
          />
        </div>
        {this.props.counter >= 5 && (
          <div className="hint">
            <button
              className="GameOneButtons"
              onClick={() => {
                this.props.showHint();
              }}
            >
              HINT
            </button>
          </div>
        )}
        {showHint && (
          <div
            className="hintAnswer
          "
          >
            <p>
              The right answer
              <b>
                {this.props.answer.charAt(0).toUpperCase() +
                  this.props.answer.slice(1)}
              </b>
            </p>
          </div>
        )}
        {this.props.addAnswerName && this.props.answerName && (
          <div className="answer_name">
            <h3>
              Nope! The correct breed is:{" "}
              {rightAnswer.charAt(0).toUpperCase() + rightAnswer.slice(1)}
            </h3>
          </div>
        )}
        <div>
          <h2>Directions:</h2>
          <p>Select the correct dog breed to raise and keep your score!</p>
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
    answerImage: state.dogs.answerImage,
    answerName: state.dogs.answerName,
    counter: state.counter,
    counterTotal: state.counterTotal,
    hint: state.dogs.hint
  };
};

export default connect(
  mapStateToProps,
  {
    getDogListAndAnswers,
    setAnswers,
    addAnswerName,
    deleteAnswerName,
    increment,
    incrementTotal,
    showHint
  }
)(GameOne);
