import React from "react";

const Cart = ({ name, image }) => {
  return (
    <figure className="category">
      <img src={image} alt="" />
      <figcaption className="title">{name}</figcaption>
    </figure>
  );
};

export default Cart;
