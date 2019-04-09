import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const breed = props.breed;
  return (
  
    <li key={breed}>
      <Link to={`/dog-breeds/${breed}`}>
        {breed.charAt(0).toUpperCase() + breed.slice(1)}
      </Link>
    </li>
  );
};
