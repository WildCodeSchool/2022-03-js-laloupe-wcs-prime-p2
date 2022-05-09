import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBox from "./SearchBox";

const SearchBar = ({ setMovies }) => {
  // const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    const url = `https:api.themoviedb.org/3/search/movie?api_key=37c6f95d37566ae6e16181a80c84a1e9&language=en-US&query=${searchValue}`;

    const response = await axios.get(url);
    const { data } = response;

    if (data.results) {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    if (searchValue) {
      getMovieRequest();
    } else {
      setMovies([]);
    }
  }, [searchValue]);

  return (
    <div className="Search">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};
export default SearchBar;
