import React from "react";
import PropTypes from "prop-types";
import "./Meme.css";
import { Link } from "react-router-dom";

const Meme = ({ id, name, image }) => {
  return (
    <Link
      to={{
        pathname: `/meme/${id}`,
        state: {
          name: name,
          image: image,
        },
      }}
    >
      <div className="meme">
        <img className="meme__img" src={image} alt={name} title={name} />
        <h1 className="meme__name">{name}</h1>
      </div>
    </Link>
  );
};

Meme.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Meme;
