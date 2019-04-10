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
            this.props.dogs.map(dog => (
              <button className="dogAnswers" key= {dog}>
                {this.props.dogs}
              </button>
            ))}
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

  return {
    dogs: randomBreeds,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getDogList }
)(GameOne);
