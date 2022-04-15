import React from "react";
import "./Card.css";

function Card({ imgUrl, title, content }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={title || "Image"} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;
