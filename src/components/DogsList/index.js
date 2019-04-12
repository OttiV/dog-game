import React, { Component } from "react";
import Dog from "../Dog";
import { getDogList } from "../../actions/Dogslist";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { Link } from "react-router-dom";
import "./DogList.css"

class DogsList extends Component {
  componentDidMount() {
    this.props.getDogList();
  }

  render() {
    if (this.props.loading) {
      return <LoadingModal />;
    }

    return (
      <div className="dogs-list">
        <h1>DOG LIST</h1>
        <Link  to="/">
          <button className="DogListButtons">HOME</button>
        </Link>

        <ul className="DogListLinks">
          {this.props.dogNames !== null &&
            this.props.dogNames.map(breed => {
              return <Dog key={breed.toString()} breed={breed} />;
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogNames: state.dogs.breeds,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getDogList }
)(DogsList);
