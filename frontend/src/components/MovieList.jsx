/* eslint-disable */
import DisplayComponent from "./DisplayComponent";
import "./MovieList.scss";
import { useState } from "react";
import Modal from "./Modal";
import useModal from "./UseModal";

const MovieList = ({ movies, FavouriteComponent }) => {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="image-container">
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
          {/* {movie.poster_path && (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie"
            />
          )} */}
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
