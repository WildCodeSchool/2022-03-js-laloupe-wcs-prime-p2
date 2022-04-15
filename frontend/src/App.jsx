import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "@pages/Categories";
import CoupDeCoeur from "@pages/CoupDeCoeur";
import Films from "@pages/Films";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CoupDeCoeur" element={<CoupDeCoeur />} />
        <Route path="/Films" element={<Films />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
