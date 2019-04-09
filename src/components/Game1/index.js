import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
class GameOne extends Component {
  //   componentDidMount() {
  //     this.props.getGameOne();
  //   }

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

        {/* <ul>
              {this.props.dogNames !== null &&
                this.props.dogNames.map(breed => {
                  return <Dog key={breed.toString()} breed={breed} />;
                })}
            </ul> */}
      </div>
    );
  }
}
export default GameOne;
