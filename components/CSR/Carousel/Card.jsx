"use client";
import React from "react";
import Image from "next/image";
import mockImage from "@/app/assets/mock.jpg";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const Card = ({ CardRef, movie }) => {
  return (
    <div ref={CardRef} className="card flex-shrink-0 w-full relative">
      <Image
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : mockImage
        }
        alt={movie?.title || "Poster"}
        fill
        className="rounded-[50px] object-cover h-full"
      />
      <div className="absolute right-5 bottom-[30%]">
        <Button variant="secondary" className="px-3 scale-75 text-xs">
          More Info <Info />
        </Button>
      </div>
    </div>
  );
};

export default Card;
