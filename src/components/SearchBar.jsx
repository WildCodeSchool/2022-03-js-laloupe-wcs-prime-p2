import React from "react";

import { useState, useEffect } from "react";



const SearchBar= ()=> {

  const [datas, setDatas]= useState([]);
  const [searchTerm, setSearchTerm]= useState("");

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=37c6f95d37566ae6e16181a80c84a1e9')
    .then(response=> response.json())
    .then(json=> setDatas(json))
}, []);

const handleSearchTerm = (e) => {
let value =e.target.value;
setSearchTerm(value);


};
  
return ( 
  <>
    <div className="search">
      <input type="text" name="searchBar" id="searchBar" placeholder="search" onChange={handleSearchTerm}/>
    </div>
    <div className="search_results">
      {datas.filter((val) => {
        return val.title.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .map((val) => {
      return (
      <div className="search_result" key={val.id}>{val.title}</div>
      );
      })}
    </div>
  </>
  );
}
  
  
  
  

export default SearchBar;