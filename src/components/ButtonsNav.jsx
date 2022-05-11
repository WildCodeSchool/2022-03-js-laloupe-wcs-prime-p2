import "./buttonsnav.scss";
import { Link } from "react-router-dom";
import HomeIcons from "../assets/Home.png";
import CatIcons from "../assets/Categories.png";
import CoeurIcons from "../assets/Coeur.png";
import loginIcons from "../assets/login.png";

export default function ButtonNav() {
  return (
    <div>
      <ul className="ButtonsNav">
        <Link to="/">
          <li className="btn-nav">
            <img className="imgFooter" src={HomeIcons} alt="Home Icons" />
            <p className="nav">Home</p>
          </li>
        </Link>
        <Link to="/Categories">
          <li className="btn-nav">
            <img className="imgFooter" src={CatIcons} alt="Categories Icons" />
            <p className="nav">Genres</p>
          </li>
        </Link>
        <Link to="/CoupDeCoeur">
          <li className="btn-nav">
            <img className="imgFooter" src={CoeurIcons} alt="Coup de coeur" />
            <p className="nav">Favorite</p>
          </li>
        </Link>
        <Link className="login-footer" to="/Login">
          <li className="btn-nav">
            <img className="imgFooter" src={loginIcons} alt="Login" />
            <p className="nav">Login</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
