import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tab from "@components/tableau";
import "./Carousels.css";

const Carousels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      {tab.map((item) => (
        <div className="carousels">
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

export default Carousels;
