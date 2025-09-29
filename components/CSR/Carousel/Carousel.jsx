"use client";
import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import DetailsCard from "./DetailsCard";
import PcHero from "./pc/PcHero";
import { useHomeData } from "@/contexts/HomeData";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const Trending = useHomeData((state) => state.Trending);
  return (
    <>
      {/* MOBILE */}
      <div className="carousel">
        <CardsContainer
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
          Trending={Trending}
        />
        <DetailsCard slideIndex={slideIndex} Trending={Trending} />
      </div>
      {/* MOBILE */}
      <PcHero />
      {/* PC */}
    </>
  );
};

export default Carousel;
