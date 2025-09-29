"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Card from "./Card";
import { Skeleton } from "@/components/ui/skeleton";

const CardsContainer = ({ slideIndex, setSlideIndex, Trending }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev === Trending.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [Trending.length]);

  if (!Trending || Trending.length === 0)
    return (
      <div className="cardsContainer flex flex-col space-y-3 z-100">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2 ">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full"></Skeleton>
        </div>
      </div>
    );

  return (
    <motion.div
      className="cardsContainer flex cursor-grab"
      animate={{
        x: `-${slideIndex * 100}%`,
      }}
      transition={{
        type: "tween",
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
