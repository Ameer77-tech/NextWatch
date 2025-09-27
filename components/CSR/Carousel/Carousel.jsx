import React from "react";
import CardsContainer from "./CardsContainer";
import DetailsCard from "./DetailsCard";
import { trendingMovies } from "@/app/lib/TrendingMock";
import Arrows from "@/components/Arrows";

const Carousel = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="carousel">
        <CardsContainer />
        <DetailsCard />
      </div>
      {/* MOBILE */}

      {/* PC */}
      <div className="hidden md:block md:relative md:mt-25 p-5">
        <div className="md:flex md:relative overflow-x-auto gap-5 md:min-h-[400px]">
          {trendingMovies.map((movie) => (
            <div className="flex-shrink-0 w-full" key={movie.id}>
              <div className="video text-center">VIDEO GOES HERE</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col gap-4 text-white">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold">
            Avatar: The Way of Water
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg max-w-xl">
            Jake Sully and Neytiri lead the Na'vi against a new threat to their
            world.
          </p>

          {/* Genres & Rating */}
          <div className="flex flex-wrap items-center gap-2">
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

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <button className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700">
              Play Trailer
            </button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
              More Info
            </button>
          </div>
        </div>
       <Arrows />
      </div>

      {/* MOBILE */}
    </>
  );
};

export default Carousel;
