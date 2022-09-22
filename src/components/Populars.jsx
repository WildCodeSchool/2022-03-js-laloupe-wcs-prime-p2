import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Populars.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import useModal from "./UseModal";

const Populars = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  // coup de coeur

  const [popular, setPopular] = useState([]);
  const getPopular = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=94b0467408dc50f0db83378d241839d5"
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setPopular(data.results);
      });
  };
  useEffect(() => {
    getPopular();
  }, []);
  const { isShowing, toggle } = useModal();
  return (
    <div className="movie-popular">
      <h2 className="popular-title">Popular</h2>
      <Slider {...settings}>
        {popular?.map((item) => (
          <div key={`carousel2-${item.id}`} className="carousels-popular">
            <div
              onClick={() => toggle(item.id)}
              onKeyPress={() => toggle(item.id)}
              role="button"
              tabIndex={0}
            >
              <div className="card-popular">
                <div className="card-top-popular">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt="poster"
                  />
                </div>
                <div className="movie-over-popular">
                  <div className="contenu">
                    {/* coup de coeur */}

                    <p className="overview"> {item.title}</p>
                    <p className="vote-pop">⭐️ {item.vote_average} </p>
                    <p className="date">Release date : {item.release_date} </p>
                  </div>
                </div>
              </div>
              <Modal
                isShowing={isShowing[item.id]}
                hide={toggle[item.id]}
                key={`car-${item.id}`}
                id={item.id}
                title={item.title}
                overview={item.overview}
                posterPath={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                vote={item.vote_average}
                date={item.release_date}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Populars;
