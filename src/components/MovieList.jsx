/* eslint-disable */
import "./MovieList.scss"

const MovieList = ({ movies, FavouriteComponent }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="image-container">
          {/* {console.log(movie)} */}

          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie"
            />
          )}
          <div
            role="button"
            tabIndex="0"
            onClick={() => movie.handleFavouritesClick(movie)}
          />
          {FavouriteComponent}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
