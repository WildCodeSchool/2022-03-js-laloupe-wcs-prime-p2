import Header from "@components/Header";
import Carousels from "@components/Carousels";
import Populars from "@components/Populars";
import Rated from "@components/rated";

const Home = () => {
  return (
    <>
      <Header />
      <Carousels />
      <Populars />
      <Rated />
    </>
  );
};

export default Home;
