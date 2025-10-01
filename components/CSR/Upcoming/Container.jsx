"use client";
import React from "react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { useHomeData } from "@/contexts/HomeData";
import { Skeleton } from "@/components/ui/skeleton";
import Arrows from "@/components/Arrows";

const Container = () => {
  const Upcoming = useHomeData((state) => state.Upcoming);
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
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    if (cardRef.current && containerRef.current) {
      const cardW = cardRef.current.offsetWidth + 20;
      const containerW = containerRef.current.offsetWidth;
      const totalCardsW = cardW * Upcoming.length;
      const maxDragDistance = totalCardsW - containerW;
      setMaxDrag(maxDragDistance > 0 ? maxDragDistance : 0);
    }
  }, [Upcoming, cardRef, containerRef]);

  const handleNext = () => {
    setcurrentIndex((prev) =>
      prev !== Math.floor(Upcoming.length / 5) - 1 ? prev + 1 : (prev = prev)
    );
  };
  const handlePrev = () => {
    setcurrentIndex((prev) => (prev !== 0 ? prev - 1 : (prev = prev)));
  };

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
        className="UpcomingContainer gap-4 flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        {Upcoming.map((movie) => (
          <MovieCard key={movie.id} cardRef={cardRef} movie={movie} />
        ))}
      </motion.div>
      <Arrows
        handleNext={handleNext}
        handlePrev={handlePrev}
        from="Upcoming"
        length={Upcoming.length}
        activeIndex={currentIndex}
      />
    </div>
  );
};

export default Container;
