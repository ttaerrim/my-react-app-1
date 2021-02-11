import React, { useEffect } from "react";
import "./Detail.css";
const Detail = (props) => {
  useEffect(() => {
    if (props.location.state === undefined) {
      props.history.push("/");
    }
  });
  if (props.location.state) {
    return (
      <div className="detail">
        <img src={props.location.state.image} />
        <h3>{props.location.state.name}</h3>
      </div>
    );
  } else {
    return null;
  }
};

export default Detail;
