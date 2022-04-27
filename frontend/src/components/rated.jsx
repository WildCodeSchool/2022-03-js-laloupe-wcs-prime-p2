import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./rated.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  return (
    <div className="rate">
      <h2 className="rated-title">Les mieux notés</h2>
      <Slider {...settings}>
        {image.map((item) => (
          <div key={`carousel-${item.id}`} className="carousels-rated">
            <div className="card-rated">
              <div className="card-top">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />
                <div className="movie-over-rated">
                  <div className="contenu-rated">
                    <p className="overview-rated">Title : {item.title}</p>
                    <p className="vote-rated">⭐️ {item.vote_average} </p>
                    <p className="date-rated">
                      Date de sorti : {item.release_date}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Rated;
