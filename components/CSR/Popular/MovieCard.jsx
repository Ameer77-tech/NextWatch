import React from "react";
import mockImage from "@/app/assets/poster.jpg";
import Image from "next/image";
import { motion } from "motion/react";

const MovieCard = ({ cardRef, movie }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex flex-col"
      variants={cardVariants}
      style={{
        flex: `0 0 calc(${100 / 5}% - 16px)`,
      }}
    >
      <div className="bg-slate-500 rounded-t-lg min-w-35 md:min-w-60 min-h-50 md:min-h-70 relative">
        <Image
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : mockImage
          }
          alt="image"
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="h-20 w-full bg-secondary flex flex-col justify-evenly p-1">
        <h1 className="text-sm overflow-scroll h-1/2">
          {movie?.name || movie?.title}
        </h1>
        <p className="text-xs opacity-75">⭐ {movie?.vote_average.toFixed(1)}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
