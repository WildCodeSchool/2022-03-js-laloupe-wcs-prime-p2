import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./rated.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import useModal from "./UseModal";

const Rated = () => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          pauseOnHover: true,
        },
      },
    ],
  };

  const [image, setImage] = useState([]);
  const getImage = () => {
    // Send the request
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=94b0467408dc50f0db83378d241839d5"
      )
      // Extract the DATA from the received response
      .then((response) => {
        return response.data;
      })
      // Use this data to update the state
      .then((data) => {
        setImage(data.results);
      });
  };

  useEffect(() => {
    getImage();
  }, []);
  const { isShowing, toggle } = useModal();
  return (
    <div className="rate">
      <h2 className="rated-title">Top rated</h2>
      <Slider {...settings}>
        {image?.map((item) => (
          <div key={`carousel3-${item.id}`} className="carousels-rated">
            <div
              onClick={() => toggle(item.id)}
              onKeyPress={() => toggle(item.id)}
              role="button"
              tabIndex={0}
            >
              <div className="card-rated">
                <div className="card-top">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt=""
                  />
                  <div className="movie-over-rated">
                    <div className="contenu-rated">
                      <p className="overview-rated">{item.title}</p>
                      <p className="vote-rated">⭐️ {item.vote_average} </p>
                      <p className="date-rated">
                        Release Date : {item.release_date}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                isShowing={isShowing[item.id]}
                hide={toggle}
                key={`carousels-${item.id}`}
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

export default Rated;
