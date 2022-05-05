import { useState } from "react";
import Header from "@components/Header";
import Carousels from "@components/Carousels";
import Populars from "@components/Populars";
import Rated from "@components/rated";
import MovieList from "@components/MovieList";
import AddFavourites from "@components/AddFavourites";
import RemoveFavourites from "@components/RemoveFavorites";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    const newFavoriteList = [...favourites, movie];
    setFavourites(newFavoriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
  };

  return (
    <>
      <Header setMovies={setMovies} />
      {!movies.length && !favourites.length && (
        <>
          <Carousels />
          <Populars />
          <Rated />
        </>
      )}
      {movies.length && (
        <MovieList
          movies={movies}
          favouriteComponent={<AddFavourites />}
          handleFavouritesClick={addFavouriteMovie}
        />
      )}
      {favourites.length && (
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={<RemoveFavourites />}
        />
      )}
    </>
  );
};

export default Home;
