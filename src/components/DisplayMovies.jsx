import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DisplayComponent from "./DisplayComponent";
import Header from "./Header";
import CustomPagination from "./CustomPaginition";

const DisplayMovies = () => {
  const [page, setPage] = useState(1);
  const { genre } = useParams();
  const [genreDetails, setGenreDetails] = useState();
  const [movies, setMovies] = useState([]);

  const getGenres = (idToGet) => {
    axios

      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=442e533a3f611fdf2ce32b99e46a8d6b&page=${page}&with_genres=${idToGet}`
      )

      .then((res) => {
        return res.data;
      })

      .then((data) => {
        setGenreDetails(data.results);
      });
  };
  useEffect(() => {
    getGenres(genre);
  }, [page]);

  return (
    <div className="category">
      <Header movies={movies} setMovies={setMovies} />

      {genreDetails?.map((movie) => (
        <DisplayComponent
          details
          overview={movie.overview}
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          vote={movie.vote_average}
          date={movie.release_date}
          setMovies={setMovies}
        />
      ))}
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default DisplayMovies;
