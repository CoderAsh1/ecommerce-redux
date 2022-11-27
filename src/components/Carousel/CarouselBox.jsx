import "./carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const CarouselBox = () => {
  return (
    // <div className="carousel-container">
    <Carousel
      autoPlay
      interval={3000}
      showArrows={true}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="carousel"
    >
      <img src={banner1} />

      <img src={banner2} />

      <img src={banner3} />
    </Carousel>
    // </div>
  );
};

export default CarouselBox;
