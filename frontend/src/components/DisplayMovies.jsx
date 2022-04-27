import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import DisplayComponent from "./DisplayComponent";

const DisplayMovies = () => {
  const { genre } = useParams();
  const [genreDetails, setGenreDetails] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=442e533a3f611fdf2ce32b99e46a8d6b&with_genres=${genre}`
      )
      .then(({ data }) => data)
      .then((data) => setGenreDetails(data.results));
  }, []);

  return (
    <div className="category">
      <Header />
      {genreDetails?.map((movie) => (
        <DisplayComponent
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default DisplayMovies;
