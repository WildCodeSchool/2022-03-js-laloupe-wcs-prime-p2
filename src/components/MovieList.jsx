import DisplayComponent from "./DisplayComponent";
import "./MovieList.scss";

const MovieList = ({ movies }) => {
  return (
    <div className="movlist">
      {movies.map((movie) => (
        <>
          <DisplayComponent
            details
            key={movie.id}
            id={movie.id}
            name={movie.name}
            title={movie.title}
            overview={movie.overview}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            vote={movie.vote_average}
            date={movie.release_date}
          />

          <div
            key={movie.id.name}
            role="button"
            tabIndex="0"
            onClick={() => movie.handleFavouritesClick(movie)}
          />
        </>
      ))}
    </div>
  );
};

export default MovieList;
