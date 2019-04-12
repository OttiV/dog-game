import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../GameOne/GameOne.css";
import HomeImage from "../homeImage/";

export default class GameTwo extends Component {
  render() {
    return (
      <div className="game-one">
        <h1>GAME TWO</h1>
       <p> How's it going</p>
        <HomeImage />
        <br />
        <Link to="/">
          <button className="GameOneButtons">HOME</button>
        </Link>
        <Link to="/dog-breeds/">
          <button className="GameOneButtons">STUDY</button>
        </Link>
      </div>
    );
  }
}
