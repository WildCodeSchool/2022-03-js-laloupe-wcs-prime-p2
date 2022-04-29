const movieDetails = ({ id, overview, title }) => {
  return (
    <figure className="category" key={id}>
      <figcaption>{title}</figcaption>
      <p>{overview}</p>
    </figure>
  );
};

export default movieDetails;
