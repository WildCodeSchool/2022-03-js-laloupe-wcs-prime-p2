import React from "react";
import logo from "../assets/logo.png";
import "./Header.css"
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        </div>
        <div className="searchBar">
          <SearchBar/>
        </div>
      </header>
  );
};
export default Header;
