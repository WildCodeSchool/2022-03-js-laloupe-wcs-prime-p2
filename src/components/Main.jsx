import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "@pages/Categories";
import CoupDeCoeur from "@pages/CoupDeCoeur";
import Films from "@pages/Films";

const Main = () => {
  return (
    <main className="mainpage">
      <section>blablalblalbabla</section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CoupDeCoeur" element={<CoupDeCoeur />} />
        <Route path="/Films" element={<Films />} />
      </Routes>
    </main>
  );
};
export default Main;
