"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";
import BrokenImage from "@/public/broken-image.png";

const Card = ({ movie }) => {
  return (
    <div className="card flex-shrink-0 w-full relative">
      <Image
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/original${movie?.poster_path}`
            : BrokenImage
        }
        alt={movie?.title || "Poster"}
        fill
        className="rounded-[50px] object-cover h-full"
        onError={(e) => {
          e.currentTarget.src = BrokenImage.src;
        }}
      />
      <Link
        href={`/category/${
          movie?.media_type == "movie" ? "movies" : "tvshows"
        }/${movie?.id}/#info`}
      >
        <div className="absolute right-5 bottom-[40%]">
          <Button variant="secondary" className="px-3 scale-75 text-xs">
            More Info <Info />
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
