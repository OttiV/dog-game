import React, { Component } from "react";
import "./App.css";
import DogListContainer from "./components/DogListContainer";
import { Route, Link } from "react-router-dom";
// import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/dog-breeds/">
            <button onClick="handleClick">STUDY</button>
          </Link>
          <h1>Dog Game</h1>
        </header>
        <main className="App-main">
          {/* <Route exact path="/" component={App} /> */}
          <Route path="/dog-breeds/" component={DogListContainer} />
        </main>
        <footer>
          <button onClick="handleClick">GAME 1</button>
          <button onClick="handleClick">GAME 2</button>
          <button onClick="handleClick">GAME 3</button>
        </footer>
      </div>
    );
  }
}

export default App;
