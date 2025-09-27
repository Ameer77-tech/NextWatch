"use client";
import React from "react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { popularMovies } from "@/app/lib/Popular";



const Container = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [MaxDrag, setMaxDrag] = useState(0);
  useEffect(() => {
    if (cardRef.current && containerRef.current) {
      const cardW = cardRef.current.offsetWidth + 20;
      const containerW = containerRef.current.offsetWidth;
      const totalCardsW = cardW * popularMovies.length;
      const maxDragDistance = totalCardsW - containerW;
      setMaxDrag(maxDragDistance > 0 ? maxDragDistance : 0);
    }
  }, []);
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
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} cardRef={cardRef} title={movie.title} />
        ))}
      </motion.div>
    </div>
  );
};

export default Container;
