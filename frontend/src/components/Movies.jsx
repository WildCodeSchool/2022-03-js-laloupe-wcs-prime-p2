import "./Movie.scss";

const Movie = ({ posterPath, title }) => {
  return (
    <figure className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={title}
      />
      <figcaption className="movie-info">
        <h3>{title}</h3>
      </figcaption>
    </figure>
  );
};

export default Movie;
