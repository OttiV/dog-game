import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
// import { getGameOne } from "../../actions/GameOne";
import { connect } from "react-redux";
import { getDogListAndAnswers } from "../../actions/GameOne";

class GameOne extends Component {
  componentDidMount() {
    this.props.getDogListAndAnswers();
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
        <Link to="/dog-breeds/">
          <button>STUDY</button>
        </Link>
        <div>
          <img src={this.props.answerImage} alt={this.props.answer} />
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
    loading: state.appStatus.loading,
    answerImage: state.dogs.answerImage
    // map state here, use in component
  };
};

export default connect(
  mapStateToProps,
  { getDogListAndAnswers }
)(GameOne);
