import React, { Component } from "react";
// import { Link } from "react-router-dom";
export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <button onClick="handleClick">GAME 1</button>
        <button onClick="handleClick">GAME 2</button>
        <button onClick="handleClick">GAME 3</button>
      </div>
    );
  }
}
