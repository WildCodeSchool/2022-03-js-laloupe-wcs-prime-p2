import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";
import "../components/categories.scss";

const Categories = () => {
  const [genres, setGenres] = useState([]);
  const getGenres = () => {
    // Request
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=442e533a3f611fdf2ce32b99e46a8d6b"
      )

      // Extract data from resp
      .then((res) => {
        return res.data;
      })

      // State update
      .then((data) => {
        setGenres(data.results);
      });

    console.warn(genres);
  };

  useEffect(() => {
    getGenres();
  }, []);
  return (
    <div className="tags">
      <div className="tag">Action</div>
      <div className="tag">Drama</div>
      <div className="tag">Anime</div>
      <div className="tag">Comedy</div>
    </div>
  );
};

export default Categories;
