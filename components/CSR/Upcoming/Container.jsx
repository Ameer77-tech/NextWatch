"use client";
import React from "react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { useHomeData } from "@/contexts/HomeData";
import { Skeleton } from "@/components/ui/skeleton";

const Container = () => {
  const Upcoming = useHomeData((state) => state.Upcoming);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [MaxDrag, setMaxDrag] = useState(0);
  useEffect(() => {
    if (cardRef.current && containerRef.current) {
      const cardW = cardRef.current.offsetWidth + 20;
      const containerW = containerRef.current.offsetWidth;
      const totalCardsW = cardW * Upcoming.length;
      const maxDragDistance = totalCardsW - containerW;
      setMaxDrag(maxDragDistance > 0 ? maxDragDistance : 0);
    }
  }, [Upcoming]);
  if (!Upcoming || Upcoming.length === 0) {
    return (
      <div className="flex gap-4">
        <div className="flex flex-col space-y-3 z-100">
          <Skeleton className="h-60 md:min-w-60 rounded-xl" />
          <div className="space-y-2 ">
            <Skeleton className="h-4 min-w-35 md:min-w-60" />
            <Skeleton className="h-4 min-w-35 md:min-w-60"></Skeleton>
          </div>
        </div>
        <div className="flex flex-col space-y-3 z-100">
          <Skeleton className="h-60 md:min-w-60 rounded-xl" />
          <div className="space-y-2 ">
            <Skeleton className="h-4 min-w-35 md:min-w-60" />
            <Skeleton className="h-4 min-w-35 md:min-w-60"></Skeleton>
          </div>
        </div>
        <div className="flex flex-col space-y-3 z-100">
          <Skeleton className="h-60 md:min-w-60 rounded-xl" />
          <div className="space-y-2 ">
            <Skeleton className="h-4 min-w-35 md:min-w-60" />
            <Skeleton className="h-4 min-w-35 md:min-w-60"></Skeleton>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="topRatedCarousel overflow-x-hidden mt-5">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{
          left: -MaxDrag,
          right: 0,
        }}
        className="topRatedContainer gap-4 flex"
      >
        {Upcoming.map((movie) => (
          <MovieCard key={movie.id} cardRef={cardRef} movie={movie} />
        ))}
      </motion.div>
    </div>
  );
};

export default Container;
