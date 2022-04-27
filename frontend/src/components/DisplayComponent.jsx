const DisplayComponent = ({ id, name, image, title }) => {
  return (
    <figure className="category" key={id}>
      <img src={image} alt={name} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export default DisplayComponent;
