import "./Category.scss";

const Category = ({ name, image }) => {
  return (
    <figure className="category">
      <img src={image} alt="" />
      <figcaption className="title">{name}</figcaption>
    </figure>
  );
};

export default Category;
