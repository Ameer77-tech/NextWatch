import React from "react";
import CardsContainer from "./CardsContainer";
import DetailsCard from "./DetailsCard";

const Carousel = () => {
  return (
    <div className="carousel">
      <CardsContainer />
      <DetailsCard />
    </div>
  );
};

export default Carousel;
