import "./Category.scss";

const Category = ({ image, name }) => {
  return (
    <figure className="category">
      <img className="cardimg" src={image} alt="" />
      <figcaption className="title">{name}</figcaption>
    </figure>
  );
};

export default Category;
