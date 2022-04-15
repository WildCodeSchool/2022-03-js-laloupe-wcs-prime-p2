import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";
import Categories from "@pages/Categories";
import CoupDeCoeur from "@pages/CoupDeCoeur";
import Films from "@pages/Films";
import Footer from "@components/Footer";
import CardContainer from "@components/CardContainer";
import cardsData from "@components/Data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CoupDeCoeur" element={<CoupDeCoeur />} />
        <Route path="/Films" element={<Films />} />
      </Routes>

      <div className="container">
        <h1 style={{ "text-align": "left" }}>Populaires</h1>
        <CardContainer cards={cardsData} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
