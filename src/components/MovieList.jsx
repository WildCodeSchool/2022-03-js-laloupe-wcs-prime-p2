import React from "react";
import AddFavourites from "./AddFavourites";
import "./MovieList.scss";

const MovieList = (props) => {
  const FavouriteComponent = props.FavouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie"
          ></img>
          <button onClick={() => props.handleFavouritesClick(movie)}>
            Add Favourites
          </button>
          {FavouriteComponent}
        </div>
      ))}
    </>
  );
};

export default MovieList;
