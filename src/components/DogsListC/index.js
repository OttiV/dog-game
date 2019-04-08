import React, { Component } from "react";
import Dog from "../DogC";
import { getDogList } from "../../actions/DogslistA";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class DogsList extends Component {
  componentDidMount() {
    this.props.getDogList();
  }

  render() {
    if (this.props.loading) {
      return <LoadingModal />;
    }

    return (
      <ul>
        {this.props.breeds !== null &&
          this.props.breeds.map(breed => {
            return <Dog key={breed.id} breed={breed} />;
          })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.breeds,
    loading: state.appStatus.loading
  };
};

export default connect(mapStateToProps,{ getDogList })(DogsList);
