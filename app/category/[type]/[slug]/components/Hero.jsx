import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const Hero = ({ title, poster, tagline, release, genres, rating }) => {
  return (
    <div className="relative z-10 md:mt-15 w-full md:h-100 h-screen flex justify-center md:space-x-30 items-center">
      <div className="h-50 w-50 flex justify-center items-center">
        <AspectRatio ratio={3 / 4}>
          <Image
            loading="lazy"
            fetchPriority="high"
            src={`https://image.tmdb.org/t/p/original${poster}`}
            fill
            alt="image"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col justify-evenly space-y-2 bg-background text-background-foreground p-10">
        <h1 className="md:text-3xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">{tagline}</p>
        <div className="flex space-x-2">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="border bg-secondary px-2 py-1 rounded text-secondary-foreground text-xs"
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
