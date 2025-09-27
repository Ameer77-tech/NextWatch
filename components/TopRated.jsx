"use client";
import { topRatedMovies } from "@/app/lib/TopRated";
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import React, { useEffect, useRef, useState } from "react";
import mockImage from "@/app/assets/mock.jpg";
import Image from "next/image";
import { motion } from "motion/react";

const TopRated = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [MaxDrag, setMaxDrag] = useState(0);
  useEffect(() => {
    if (cardRef.current && containerRef.current) {
      const cardW = cardRef.current.offsetWidth + 20; 
      const containerW = containerRef.current.offsetWidth; 
      const totalCardsW = cardW * topRatedMovies.length;
      const maxDragDistance = totalCardsW - containerW; 
      setMaxDrag(maxDragDistance > 0 ? maxDragDistance : 0);
    }
  }, []);
  return (
    <div className="mt-7 p-5">
      <h1 className={`text-md font-semibold ${JetBrainsMono.className}`}>
        TOP RATED
      </h1>
      <div className="topRatedCarousel overflow-x-hidden mt-5">
        <motion.div
          ref={containerRef}
          drag="x"
          dragConstraints={{
            left: -MaxDrag,
            right: 0,
          }}
          className="topRatedContainer gap-4 flex "
        >
          {topRatedMovies.map((movie) => (
            <div
              ref={cardRef}
              key={movie.id}
              className="bg-slate-500 rounded-lg min-w-35 min-h-50 relative"
            >
              <Image
                src={mockImage}
                alt="image"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopRated;
