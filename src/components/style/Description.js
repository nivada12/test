import React from "react";
import { Link } from "react-router-dom";

function Description(props) {
  const {
    category,
    description,
    id,
    image,
    price,
    title,
  } = props.location.state;
  console.log(props.location.state);
  return (
    <div>
      <Link to="/">
        <u>BACK TO HOME</u>
      </Link>
      <p>{description}</p>
      <img alt={image} src={image} />
    </div>
  );
}

export default Description;
