import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tab from "@components/tableau";
import "./Populars.css";

const Populars = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
  };
  return (
    <Slider {...settings}>
      {tab.map((item) => (
        <div key={`carousel-${item.id}`} className="carousels">
          <div className="card">
            <div className="card-top">
              <img src={item.image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Populars;
