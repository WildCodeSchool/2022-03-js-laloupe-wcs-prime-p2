import Carousels from "@components/Carousels";
import Populars from "@components/Populars";

const Home = () => {
  return (
    <>
      <Carousels />
      <h2 className="popular-title">Populaires</h2>
      <Populars />
    </>
  );
};

export default Home;
