import React, { Component } from "react";
// import request from "superagent";
import DogsList from "./DogList";

export default class DogsListContainer extends Component {
  state = { dogBreeds: null };

  componentDidMount() {
    // request
    //   .get("https://dog.ceo/api/breeds/list/all")
    //   .then(response => this.updateBreeds(Object.keys(response.body.message)))
    //   .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />;
  }
}

