import React from "react";
import AddFavourites from "./AddFavourites";

const MovieList = (props) => {
  const FavouriteComponent= props.FavouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-containe">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie"
          ></img>
          <div onClick={() => props.handleFavouritesClick(movie)}>On Click</div>
          {FavouriteComponent}
        </div>
      ))}
    </>
  );
};

export default MovieList;
