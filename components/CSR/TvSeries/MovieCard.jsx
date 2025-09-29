import React from "react";
import mockImage from "@/app/assets/mock.jpg";
import Image from "next/image";

const MovieCard = ({ cardRef, movie }) => {
  return (
    <div className="flex flex-col">
      <div
        ref={cardRef}
        className="bg-slate-500 rounded-lg min-w-35 md:min-w-60 min-h-50 md:min-h-70 relative"
      >
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
          {movie?.title || movie?.name}
        </h1>
        <p className="text-xs opacity-75">⭐ 7.8</p>
      </div>
    </div>
  );
};

export default MovieCard;
