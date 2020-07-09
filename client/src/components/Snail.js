import React from "react";

function Snail(props) {
  return (
    <div className="card snail">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Link:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Snail;