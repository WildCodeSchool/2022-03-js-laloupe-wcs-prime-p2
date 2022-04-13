import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Categories">Categories</Link>
        <Link to="/CoupDeCoeur">Coup de Coeur</Link>
        <Link to="/Films">Films</Link>
      </nav>
    </footer>
  );
}
