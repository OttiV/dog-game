import React, { Component } from "react";
// import DogListContainer from "../DogListContainer";
import {  Link } from "react-router-dom";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Link to="/dog-breeds/">
            <button onClick="#">STUDY</button>
          </Link>
          <h1>DOG GAME</h1>
        </header>
        <main className="Home-main">
          {/* <Route exact path="/" component={App} /> */}
          {/* <DogListContainer /> */}
        </main>
        <footer>
          <button onClick="#">GAME 1</button>
          <button onClick="#">GAME 2</button>
          <button onClick="#">GAME 3</button>
        </footer>
      </div>
    );
  }
}
