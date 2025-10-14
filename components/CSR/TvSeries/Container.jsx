"use client";
import React from "react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";

import { useHomeData } from "@/contexts/HomeData";
import { Skeleton } from "@/components/ui/skeleton";
import Arrows from "@/components/Arrows";
import TvSeriesSkeleton from "./Skeleton";

const Container = () => {
  const TvSeries = useHomeData((state) => state.TvSeries);
  const [currentIndex, setcurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [MaxDrag, setMaxDrag] = useState(0);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  useEffect(() => {
    if (cardRef.current && containerRef.current) {
      const cardW = cardRef.current.offsetWidth + 20;
      const containerW = containerRef.current.offsetWidth;
      const totalCardsW = cardW * TvSeries.length;
      const maxDragDistance = totalCardsW - containerW;
      setMaxDrag(maxDragDistance > 0 ? maxDragDistance : 0);
    }
  }, [TvSeries, cardRef, containerRef]);

  const handleNext = () => {
    setcurrentIndex((prev) =>
      prev !== Math.floor(TvSeries.length / 5) - 1 ? prev + 1 : (prev = prev)
    );
  };
  const handlePrev = () => {
    setcurrentIndex((prev) => (prev !== 0 ? prev - 1 : (prev = prev)));
  };

  if (!TvSeries || TvSeries.length === 0) {
    return <TvSeriesSkeleton />;
  }

  return (
    <div className=" overflow-x-hidden mt-5">
      <motion.div
        ref={containerRef}
        animate={{
          x: `-${currentIndex * 100}%`,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
          },
        }}
        drag="x"
        dragConstraints={{
          left: -MaxDrag,
          right: 0,
        }}
        className="TvSeriesContainer gap-4 flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        {TvSeries.map((movie) => (
          <MovieCard key={movie.id} cardRef={cardRef} movie={movie} />
        ))}
      </motion.div>
      <Arrows
        handleNext={handleNext}
        handlePrev={handlePrev}
        from="Tv Series"
        length={TvSeries.length}
        activeIndex={currentIndex}
        setActiveIndex={setcurrentIndex}
      />
    </div>
  );
};

export default Container;
