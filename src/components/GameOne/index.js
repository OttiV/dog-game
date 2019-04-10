import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
// import { getGameOne } from "../../actions/GameOne";
import { connect } from "react-redux";
import { setAnswers } from "../../actions/GameOne";
import { getDogList } from "../../actions/Dogslist";

class GameOne extends Component {
  componentDidMount() {
    // we already have dogs
    if (this.props.breeds.length !== 0) {
      this.props.setAnswers();
    }

    if (this.props.breeds.length === 0) {
      this.props.getDogListAndAnswers();
    }

    // we dont have dogs
    // fetch dogs first, and then setAnswers
  }

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
        <div>
          <img src={this.props.image} alt={this.props.answer} />
        </div>
        <div>
          {this.props.answers &&
            this.props.answers.map(dog => {
              return <button key={this.props.breeds.breeds}>{dog}</button>;
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
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { setAnswers, getDogList }
)(GameOne);
