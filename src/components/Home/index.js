import React, { Component } from "react";
// import DogListContainer from "../DogListContainer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Link to="/dog-breeds/">
            <button>STUDY</button>
          </Link>
          <h1>DOG GAME</h1>
        </header>
        <main className="Home-main">
          {/* <Route exact path="/" component={App} /> */}
          {/* <DogListContainer /> */}
        </main>
        <footer>
          <Link to="/game-one/">
            <button>GAME 1</button>
          </Link>
          <Link to="/game-two/">
            <button>GAME 2</button>
          </Link>
          <Link to="/game-three/">
            <button>GAME 3</button>
          </Link>
        </footer>
      </div>
    );
  }
}
