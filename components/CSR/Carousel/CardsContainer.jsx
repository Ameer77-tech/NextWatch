"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Card from "./Card";

const CardsContainer = ({ slideIndex, setSlideIndex, Trending }) => {
 

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev === Trending.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [Trending.length]);


  if (!Trending || Trending.length === 0) return <div>Loading cards...</div>;

  return (
    <motion.div
      className="cardsContainer flex cursor-grab"
      animate={{
        x: `-${slideIndex * 100}%`,
      }}
      transition={{
        type : "tween"
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      {Trending.map((movie, i) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </motion.div>
  );
};

export default CardsContainer;
