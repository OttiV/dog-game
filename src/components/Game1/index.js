import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
import { getGameOne } from "../../actions/GameOne";
import { connect } from "react-redux";

class GameOne extends Component {
  componentDidMount() {
    this.props.getGameOne();
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
          {this.props.images &&
            this.props.images.map(url => (
              <img className="dogImages" key={url} src={url} alt="Dog" />
            ))}
          {!this.props.images && "Loading..."}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.dogs);
  return {
    images: state.dogs.selectedDogImages,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getGameOne }
)(GameOne);
