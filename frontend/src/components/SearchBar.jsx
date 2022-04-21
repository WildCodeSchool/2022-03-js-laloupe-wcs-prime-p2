/* import React from "react";
import "./SearchBar.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const SearchBar= ()=> {

  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState([]),
  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=37c6f95d37566ae6e16181a80c84a1e9&query=${search}`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

 
  return (
    <div className="Searchbar">
    <input
            type="text"
            placeholder="Search Movie"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Search" />
  
    </div>
  );
}

export default SearchBar; */