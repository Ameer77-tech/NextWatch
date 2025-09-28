"use client";
import React, { useEffect, useRef, useState } from "react";
import { trendingMovies } from "@/app/lib/TrendingMock";
import Arrows from "@/components/Arrows";
import poster from "@/app/assets/poster.jpg";
import mock from "@/app/assets/mock.jpg";
import Image from "next/image";
import { motion } from "motion/react";

const PcHero = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleNext = () => {
    if (slideIndex == trendingMovies.length - 1) {
      setslideIndex(0);
    } else {
      setslideIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (slideIndex == 0) {
      setslideIndex(trendingMovies.length - 1);
    } else {
      setslideIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="hidden md:block relative">
      {/* Horizontal scroll of videos */}
      <motion.div
        animate={{
          x: `-${slideIndex * 100}%`,
          transition: {
            duration: 0.3,
            ease: "linear",
          },
        }}
        className="flex md:min-h-[400px] relative"
      >
        {trendingMovies.map((movie) => (
          <motion.div className="flex-shrink-0 w-full h-screen" key={movie.id}>
            <div className="relative w-full h-full">
              <Image
                src={movie.poster}
                fill
                alt="poster"
                className="object-center object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hero overlay (centered over container) */}
      <div className="absolute inset-0 flex flex-col justify-center text-white bg-black/70 p-6 md:p-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          {trendingMovies[slideIndex].title}
        </h1>
        <p className="text-sm md:text-lg max-w-xl mb-4">
          Jake Sully and Neytiri lead the Na'vi against a new threat to their
          world.
        </p>
        <div className="flex flex-wrap  items-center gap-2 mb-4">
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

      {/* Arrows component */}
      <Arrows handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default PcHero;
