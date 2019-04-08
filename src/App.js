import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import DogListContainer from "./components/DogListContainer";
import { Route, Link } from "react-router-dom";
// import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/dog-breeds/" component={DogListContainer} />
      </div>
    );
  }
}

export default App;
