import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages(props) {
  console.log(props);
  const images = props.images;
  return (
    <div className="dog-breed-images">
      <h1>Dog Breed Images</h1>
      This page will show images of the {props.match.params.breed} breed.
      <div>
        {images && images.map(url => <img src={url} alt="DOG IMAGE" />)}
        {!images && "Loading..."}
      </div>

      <Link to="/">GO BACK BUTTON</Link>
    </div>
  );
}
