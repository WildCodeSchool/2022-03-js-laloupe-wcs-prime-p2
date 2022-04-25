import "./Category.scss";
import React from "react";

// On passe des props en plus pour permettre à l'api de reconnaitre
// les valeurs passées vont permettre d'être rebalancés
// dans le call API par le composant

const Category = ({ name, image, id }) => {
  return (
    <figure className="category">
      <p>{id}</p>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
      </div>
    </figure>
  );
};

export default Category;
