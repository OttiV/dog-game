import React, { Component } from "react";
import Home from "./components/Home/index";
// import DogListContainer from "./components/DogListContainer";
import { Route } from "react-router-dom";
import "./App.css";
import DogsList from "./components/DogsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/dog-breeds/" component={DogsList} />
      </div>
    );
  }
}

export default App;
