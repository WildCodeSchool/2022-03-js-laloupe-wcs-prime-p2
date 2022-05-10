import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Populars.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

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

  const addStorage = (id) => {
    const storedData = window.localStorage.id
      ? window.localStorage.id.split(",")
      : [];

    if (!storedData.includes(id.toString())) {
      storedData.push(id);
      window.localStorage.id = storedData;
    }
  };

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

  return (
    <div className="movie-popular">
      <h2 className="popular-title">Populaires</h2>
      <Slider {...settings}>
        {popular.map((item) => (
          <div key={`carousel-${item.id}`} className="carousels-popular">
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
                  <button
                    className="cc"
                    type="button"
                    onClick={() => addStorage(item.id)}
                  >
                    Like
                  </button>
                  <p className="overview">Title : {item.title}</p>
                  <p className="vote">⭐️ {item.vote_average} </p>
                  <p className="date">Release date : {item.release_date} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Populars;
