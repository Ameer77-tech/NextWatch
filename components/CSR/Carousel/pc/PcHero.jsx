"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Arrows from "@/components/Arrows";
import { useHomeData } from "@/contexts/HomeData";

const PcHero = () => {
  const trending = useHomeData((s) => s.Trending) || [];
  const [slideIndex, setSlideIndex] = useState(0);

  if (!trending.length) return null; // avoid errors if empty

  const handleNext = () => {
    setSlideIndex((prev) => (prev === trending.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? trending.length - 1 : prev - 1));
  };

  const posterVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <div className="hidden md:block relative">
      {/* Horizontal scroll (background images) */}
      <motion.div
        animate={{ x: `-${slideIndex * 100}%` }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="flex md:min-h-screen relative"
      >
        {trending.map((movie) => (
          <div className="flex-shrink-0 w-full min-h-screen" key={movie.id}>
            <div className="relative w-full h-full">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                fill
                alt={movie.title || movie.name || "Poster"}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Hero overlay */}
      <div className="absolute inset-0 flex h-full items-center gap-30 text-white bg-black/70 p-6 md:p-20">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {trending[slideIndex]?.name || trending[slideIndex]?.title}
          </h1>
          <p className="text-sm md:text-lg max-w-xl mb-4">
            {trending[slideIndex]?.overview}
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center px-2 py-1 rounded bg-gray-700 text-sm">
              Action
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded bg-gray-700 text-sm">
              Adventure
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded bg-gray-700 text-sm">
              Sci-Fi
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded bg-red-600 text-sm">
              ⭐ 8.2
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded border border-white text-sm">
              2022
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700">
              Play Trailer
            </button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
              More Info
            </button>
          </div>
        </div>

        {/* Poster animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            variants={posterVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-3/6 w-50 rounded-2xl relative"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${trending[slideIndex]?.poster_path}`}
              fill
              alt={trending[slideIndex]?.title || trending[slideIndex]?.name}
              className="rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <Arrows handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default PcHero;
