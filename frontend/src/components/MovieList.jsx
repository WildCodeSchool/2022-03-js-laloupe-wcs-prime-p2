/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const MovieList = ({ movies, FavouriteComponent }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="image-containe">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie"
          />
          <div
            onClick={() => movies.handleFavouritesClick(movie)}
            role="button"
            tabIndex="0"
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
