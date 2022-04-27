import React from "react";
import { useState, useEffect } from "react";
import "./SearchBar.scss";

const SearchBar= ()=> {

  const [movies, setMovies]= useState([]);
  const [searchMovies, setSearchMovies]= useState("");

  useEffect(()=> {
    fetch('https:api.themoviedb.org/3/search/movie?api_key=37c6f95d37566ae6e16181a80c84a1e9&language=en-US&query=')
    .then(response=> response.json())
    .then(json=> setMovies(json))
}, []);

const handleSearchMovie = (e) => {
let value =e.target.value;
setSearchMovie(value);

};
  
return ( 
  <>
    <div className="search">
      <input type="text" name="searchBar" id="searchBar" placeholder="search" onChange={handleSearchMovie}/>
    </div>
    <div className="search_results">
     
      <div className="search_result" key={val.id}>{val.title}</div>
      
      
    </div>
  </>
  );
}
  
  
/* {datas.filter((val) => {
  return val.title.toLowerCase().includes(searchTerm.toLowerCase());
  .map((val) => {
      return (
})
   */

export default SearchBar;
