import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import SearchBar from "./SearchBar";

const Header = ({setMovies}) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <SearchBar setMovies={setMovies}/>
    </header>
  );
};
export default Header;
