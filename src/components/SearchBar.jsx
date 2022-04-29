import React from "react";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";

const SearchBar = ({setMovies, genre}) => {
  // const [movies, setMovies] = useState([
  //   {
  //     id: 634649,
  //     original_language: "en",
  //     original_title: "Spider-Man: No Way Home",
  //     overview:
  //       "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  //     popularity: 4469.989,
  //     poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  //     release_date: "2021-12-15",
  //     title: "Spider-Man: No Way Home",
  //     video: false,
  //     vote_average: 8.1,
  //   },
  //   {
  //     id: 675353,
  //     original_language: "en",
  //     original_title: "Sonic the Hedgehog 2",
  //     overview:
  //       "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
  //     popularity: 2916.132,
  //     poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
  //     release_date: "2022-03-30",
  //     title: "Sonic the Hedgehog 2",
  //     video: false,
  //     vote_average: 7.6,
  //   },
  // ]);

  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    let url = `https:api.themoviedb.org/3/search/movie?api_key=37c6f95d37566ae6e16181a80c84a1e9&language=en-US&query=${searchValue}`;
    if (genre) {
      url = `https:api.themoviedb.org/3/search/movie?api_key=37c6f95d37566ae6e16181a80c84a1e9&${genre}&language=en-US&query=${searchValue}`;
    }
    const response = await fetch(
      url
    );
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };
  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="search">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};
export default SearchBar;
