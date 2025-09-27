"use client"
import React from "react";
import { motion } from "motion/react"

const GenreCard = ({ genre }) => {
  return (
    <div
      key={genre}
      className="genre flex justify-center items-center w-full rounded h-20"
    >
      {genre}
    </div>
  );
};

export default GenreCard;
