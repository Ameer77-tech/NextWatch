"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import MovieCard from "./MovieCard";
import { useHomeData } from "@/contexts/HomeData";
import Arrows from "@/components/Arrows";
import NowPlayingSkeleton from "./Skeleton";

const Container = () => {
  const NowPlaying = useHomeData((state) => state.NowPlaying);
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
      const totalCardsW = cardW * NowPlaying.length;
      const maxDragDistance = totalCardsW - containerW;
      setMaxDrag(maxDragDistance > 0 ? maxDragDistance : 0);
    }
  }, [NowPlaying, cardRef, containerRef]);

  const handleNext = () => {
    setcurrentIndex((prev) =>
      prev !== Math.floor(NowPlaying.length / 5) - 1 ? prev + 1 : (prev = prev)
    );
  };
  const handlePrev = () => {
    setcurrentIndex((prev) => (prev !== 0 ? prev - 1 : (prev = prev)));
  };

  if (!NowPlaying || NowPlaying.length === 0) {
    return <NowPlayingSkeleton />;
  }

  return (
    <div className="overflow-x-hidden mt-5">
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
        className="gap-4 flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {NowPlaying.map((movie) => (
          <MovieCard key={movie.id} cardRef={cardRef} movie={movie} />
        ))}
      </motion.div>
      <Arrows
        handleNext={handleNext}
        handlePrev={handlePrev}
        from="Now Playing"
        length={NowPlaying.length}
        activeIndex={currentIndex}
        setActiveIndex={setcurrentIndex}
      />
    </div>
  );
};

export default Container;
