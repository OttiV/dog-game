import React, { Component } from "react";
import Home from "./components/Home/index";
// import DogListContainer from "./components/DogListContainer";
import { Route } from "react-router-dom";
import "./App.css";
import DogsList from "./components/DogsList";
import DogsImages from "./components/DogsImages";
import GameOne from "./components/Game1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/dog-breeds/" component={DogsList} />
        <Route exact path="/dog-breeds/:breeds" component={DogsImages} />
        <Route exact path="/game-one/" component={GameOne} />
      </div>
    );
  }
}

export default App;
