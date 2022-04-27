import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const filmsEx = () => {
  const { films } = parseInt(useParams().id, 10);
  const [filmsDetails, setFilmsDetails] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie/?api_key=442e533a3f611fdf2ce32b99e46a8d6b"
      )
      .then(({ data }) => data)
      .then((data) => setFilmsDetails(data.results));
  }, []);
  console.log(filmsDetails);
  return <p>HEH</p>;
};

export default filmsEx;
