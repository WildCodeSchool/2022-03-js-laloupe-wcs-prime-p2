import "./Category.scss";
import React from "react";

// On passe des props en plus pour permettre à l'api de reconnaitre
// les valeurs passées vont permettre d'être rebalancés
// dans le call API par le composant

const Category = ({ image, name }) => {
  return (
    <figure className="category">
      <img className="cardimg" src={image} alt="" />
      <figcaption className="title">{name}</figcaption>
    </figure>
  );
};

export default Category;
