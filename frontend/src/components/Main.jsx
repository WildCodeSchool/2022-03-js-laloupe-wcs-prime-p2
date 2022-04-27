import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "@pages/Categories";
import CoupDeCoeur from "@pages/CoupDeCoeur";
import Films from "./Films";
import DisplayMovies from "./DisplayMovies";

const Main = () => {
  return (
    <main className="mainpage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:genre" element={<DisplayMovies />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/CoupDeCoeur" element={<CoupDeCoeur />} />
      </Routes>
    </main>
  );
};
export default Main;
