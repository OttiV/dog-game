import React, { Component } from "react";
import Dog from "../Dog";
import { getDogList } from "../../actions/Dogslist";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { Link } from "react-router-dom";

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
        <Link to="/">
          {" "}
          <button>GO BACK BUTTON</button>
        </Link>

        <ul>
          {this.props.breeds !== null &&
            this.props.breeds.map(breed => {
              return <Dog key={breed.toString()} breed={breed} />;
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    breeds: state.breeds,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getDogList }
)(DogsList);
