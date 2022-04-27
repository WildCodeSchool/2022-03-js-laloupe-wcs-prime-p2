import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DisplayComponent from "./DisplayComponent";

const DisplayMovies = () => {
  const { genre } = useParams();
  const [genreDetails, setGenreDetails] = useState();

  const getGenres = (idToGet) => {
    axios
      // Appel de l'api avec un url dynamique
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=442e533a3f611fdf2ce32b99e46a8d6b&with_genres=${idToGet}`
      )

      // suite d'appel normal axios
      .then((res) => {
        return res.data;
      })
      // On actualise le state avec les nouvelles valeurs récupérés
      .then((data) => {
        setGenreDetails(data.results);
        // console.log(data.results);
      });
  };

  useEffect(() => {
    getGenres(genre);
  }, []);
  //   // On va mapper genres.data chopper l'id
  //   // ces données viennent du tableau en dur plus haut
  //   // on stock les données de genresData dans genresInfos}
  //   // On lui dit que sur un onclick avec les valeurs d'ID,
  //   // il me récupère les valeurs par l'API qui seront remplis dynamiquement

  return (
    <div className="category">
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
