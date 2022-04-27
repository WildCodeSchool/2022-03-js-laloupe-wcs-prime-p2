import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <input type="text" id="search" placeholder="Entrer le titre d'un film" />
    </header>
  );
};
export default Header;
