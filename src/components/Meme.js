import React from "react";
import PropTypes from "prop-types";
import "./Meme.css";

function Meme({ id, name, image }) {
  return (
    <div className="meme">
      <img className="meme__img" src={image} alt={name} title={name} />
      <h1 className="meme__name">{name}</h1>
    </div>
  );
}

Meme.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Meme;
