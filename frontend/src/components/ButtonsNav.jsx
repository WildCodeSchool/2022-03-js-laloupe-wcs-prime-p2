import "./buttonsnav.scss";
import { Link } from "react-router-dom";
import HomeIcons from "../assets/Home.png";
import CatIcons from "../assets/Categories.png";
import CoeurIcons from "../assets/Coeur.png";
import Home from "@pages/Home";
export default function ButtonNav() {
  return (
    <div>
      <ul className="ButtonsNav">
        <Link to="/">
          <li>
            <img className="imgFooter" src={HomeIcons} alt="Home Icons" />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/Categories">
          <li>
            <img className="imgFooter" src={CatIcons} alt="Categories Icons" />
            <p>Genres</p>
          </li>
        </Link>
        <Link to="/CoupDeCoeur">
          <li>
            <img className="imgFooter" src={CoeurIcons} alt="Coup de coeur" />
            <p>Favorite</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
