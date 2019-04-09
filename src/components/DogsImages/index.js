import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
import { getDogImages } from "../../actions/DogsImages";
import { connect } from "react-redux";

class DogsImages extends Component {
  componentDidMount() {
    this.props.getDogImages(this.props.match.params.breeds);
  }

  render() {
    if (this.props.loading) {
      return <LoadingModal />;
    }

    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>
        <li key={this.props.match.params.breeds}>
          {/* <Link to={`/dog-breeds/${this.props.match.params.breeds}`}> */}
          {this.props.match.params.breeds}
          {/* </Link> */}
        </li>
        {/* <h2 /> */}
        <br />
        <Link to="/">Go back to the index</Link>
        <div>
          {this.props.images &&
            this.props.images.map(url => (
              <img className="dogImages" key={url} src={url} alt="Dog" />
            ))}
          {!this.props.images && "Loading..."}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.dogs);
  return {
    images: state.dogs.selectedDogImages,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getDogImages }
)(DogsImages);
