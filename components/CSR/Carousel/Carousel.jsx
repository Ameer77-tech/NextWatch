import React from "react";
import CardsContainer from "./CardsContainer";
import DetailsCard from "./DetailsCard";
import PcHero from "./pc/PcHero";

const Carousel = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="carousel">
        <CardsContainer />
        <DetailsCard />
      </div>
      {/* MOBILE */}
      <PcHero />
      {/* PC */}
      
    </>
  );
};

export default Carousel;
