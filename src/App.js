import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button>STUDY</button>
          <h1>Dog Game</h1>
        </header>
        <main className="App-main">
          <button>GAME 1</button>
          <button>GAME 2</button>
          <button>GAME 3</button>
        </main>
      </div>
    );
  }
}

export default App;
