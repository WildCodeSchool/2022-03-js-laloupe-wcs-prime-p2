import Main from "@components/Main";
import Footer from "@components/Footer";
import CardContainer from "@components/CardContainer";
import cardsData from "@components/Data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Main />
      <CardContainer cards={cardsData} />
      <Footer />
    </div>
  );
}

export default App;
