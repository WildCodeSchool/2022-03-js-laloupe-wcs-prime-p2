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
  };

  useEffect(() => {
    getGenres();
  }, []);
  return (
    <div id="tags">
      <div class="tag">Action</div>
      <div class="tag">Drama</div>
      <div class="tag">Anime</div>
      <div class="tag">Comedy</div>
    </div>
  );
};

export default Categories;
