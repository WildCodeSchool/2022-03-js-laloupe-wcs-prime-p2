import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "@pages/Categories";
import CoupDeCoeur from "@pages/CoupDeCoeur";
import Films from "@pages/Films";
import Footer from "@components/Footer";
import Slider from "./components/Slider";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider />

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
