"use client"
import React from "react";
import { trendingMovies } from "@/app/lib/TrendingMock";
import { motion } from "motion/react";
import Card from "./Card";
const CardsContainer = () => {
  return (
    <motion.div
      animate={{
        x: "-0vw",
      }}
      className="cardsContainer"
    >
      {trendingMovies.map((movie) => (
        <Card key={movie.id} />
      ))}
    </motion.div>
  );
};

export default CardsContainer;
