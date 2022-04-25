const DisplayComponent = ({ id, name, image, title }) => {
  return (
    <figure className="category" key={id}>
      <img src={image} alt={name} />
      <h2>{title}</h2>
    </figure>
  );
};

export default DisplayComponent;
