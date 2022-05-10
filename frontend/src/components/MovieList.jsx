/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./MovieList.scss";

const MovieList = ({ movies, FavouriteComponent }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie"
          />
          {FavouriteComponent}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
