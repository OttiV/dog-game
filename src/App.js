import React, { Component } from "react";
import HomeC from "./components/HomeC/index";
import DogListContainer from "./components/DogListContainer";
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomeC} />
        <Route path="/dog-breeds/" component={DogListContainer} />
      </div>
    );
  }
}

export default App;
