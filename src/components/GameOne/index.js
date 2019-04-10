import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
// import { getGameOne } from "../../actions/GameOne";
import { connect } from "react-redux";
import { getDogList } from "../../actions/Dogslist";

class GameOne extends Component {
  componentDidMount() {
    this.props.getDogList();
  }

  render() {
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
          {this.props.dogs &&
            this.props.dogs.map(dog => {
              return <button key={dog}>{dog}</button>;
            })}
          {!this.props.dogs && "Loading..."}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const maximum = state.dogs.breeds.length - 1;
  function getRandom() {
    return Math.floor(Math.random() * maximum);
  }
  const randomBreeds = [];
  for (let i = 0; i < 3; i++) {
    const number = getRandom();
    const breeds = state.dogs.breeds[number];
    randomBreeds.push(breeds);
  }

  // const maximumAnswer = randomBreeds.length;
  const answerNumber = Math.floor(Math.random() * randomBreeds.length);
  const answer = randomBreeds[answerNumber];
  console.log("THE OPTIONS:", randomBreeds);
  console.log("OUR WINNER:", answer);

  const answerImage = `https://dog.ceo/api/breed/${answer}/images/random`;

  console.log("OUR IMG WINNER:", answerImage);
  return {
    dogs: randomBreeds,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getDogList }
)(GameOne);
