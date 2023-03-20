import React from "react";
import BannerSlider from "./BannerSlider";
import Hotel from "./Hotel";
import Transportation from "./Transportation";
import Trip from "./Trip";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Hotel />
      <Trip />
      <Transportation />
    </div>
  );
};

export default Home;
