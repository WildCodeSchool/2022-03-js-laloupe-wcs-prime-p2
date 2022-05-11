import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "@components/CoupDeCoeur.css";
import MovieList from "@components/MovieList";

const UserList = () => {
  const [movies, setMovies] = useState([]);
  const [listData, setListData] = useState([]);

  const moviesId = window.localStorage.getItem("id")
    ? window.localStorage.id.split(",")
    : [];

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=94b0467408dc50f0db83378d241839d5`
        )
        .then((res) => {
          // eslint-disable-next-line no-shadow
          setListData((listData) => [...listData, res.data]);
        });
    }
  }, []);

  const deleteStorage = (movieId) => {
    const storedData = window.localStorage.id.split(",");

    const newData = storedData.filter((id) => id !== `${movieId}`);

    window.localStorage.id = newData;

    setListData(listData.filter((movie) => movie.id !== movieId));
  };

  return (
    <div>
      <Header setMovies={setMovies} />
      <div>
        <h1>Wishlist</h1>
        <div className="body_deco">
          {movies.length && <MovieList movies={movies} />}
          {listData ? (
            listData.map((movie) => (
              <figure className="category" key={movie.id}>
                {movie.backdrop_path && (
                  <img
                    alt=""
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  />
                )}
                <figcaption className="title">
                  <h2>{movie.title}</h2>
                  <button
                    type="button"
                    className="cc"
                    onClick={() => {
                      deleteStorage(movie);
                      window.location.reload();
                    }}
                  >
                    Delete
                  </button>
                </figcaption>
              </figure>
            ))
          ) : (
            <h2>Nothing</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
