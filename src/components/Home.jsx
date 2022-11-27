import { Typography } from "@mui/material";
import CarouselBox from "./Carousel/CarouselBox";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <CarouselBox />
      <div className="prods">
        <Typography variant="h4">Top Products</Typography>
        <Products qty />
      </div>
    </div>
  );
};

export default Home;
