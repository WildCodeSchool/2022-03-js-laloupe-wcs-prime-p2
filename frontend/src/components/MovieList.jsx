/* eslint-disable */

const MovieList = ({ movies, FavouriteComponent }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie"
          />
          <div
            role="button"
            tabIndex="0"
            onClick={() => movie.handleFavouritesClick(movie)}
          >
            On Click
          </div>
          {FavouriteComponent}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
