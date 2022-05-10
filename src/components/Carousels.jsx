import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousels.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Carousels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
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
        "https://api.themoviedb.org/3/movie/upcoming?api_key=94b0467408dc50f0db83378d241839d5"
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
    <>
      <h1>Upcomming films</h1>
      <Slider {...settings}>
        {image.map((item) => (
          <div key={`carousel-${item.id}`} className="carousel">
            <div className="card">
              <div className="card-top">
                <img
                  className="nouv"
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item.original_title}
                />
                <h2>{item.original_title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousels;
