import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";



const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        </div>
      </header>
  );
};
export default Header;
