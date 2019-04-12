import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeImage from '../homeImage/'

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Link to="/dog-breeds/">
            <button className="TopHomeButtons">STUDY</button>
          </Link>
          <h1>- DOG GAME -</h1>
        </header>
        <main className="Home-main">
          <HomeImage />
        </main>
        <footer>
          <Link to="/game-one/">
            <button className="HomeButtons">GAME 1</button>
          </Link>
          <Link to="/game-two/">
            <button className="HomeButtons">GAME 2</button>
          </Link>
        </footer>
      </div>
    );
  }
}
