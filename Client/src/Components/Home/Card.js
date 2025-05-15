import React from "react";

const Card = (props) => {

  return (
    <div className="card-container">
      <div>
        <h3>{props.title}</ h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;