import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import SearchBar from "./SearchBar";
import HomeIcons from "../assets/Home.png";
import CatIcons from "../assets/Categories.png";
import CoeurIcons from "../assets/Coeur.png";

const Header = ({setMovies}) => {
  return (
    <header>
      <ul className="Nav">
        <Link to="/">
          <li className="home">
            <img className="imgFooter" src={HomeIcons} alt="Home Icons" />
            <p className="navigation">
              <span>Home</span>
            </p>
          </li>
        </Link>
        <Link to="/Categories">
          <li className="cat">
            <img className="imgFooter" src={CatIcons} alt="Categories Icons" />
            <p className="navigation">
              <span>Genres</span>
            </p>
          </li>
        </Link>
        <Link to="/CoupDeCoeur">
          <li className="coup-de-coeur">
            <img className="imgFooter" src={CoeurIcons} alt="Coup de coeur" />
            <p className="navigation">
              <span>Favorite</span>
            </p>
          </li>
        </Link>
      </ul>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <SearchBar setMovies={setMovies}/>
    </header>
  );
};
export default Header;
