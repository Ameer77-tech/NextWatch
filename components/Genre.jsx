import { genres } from "@/app/lib/genres";
import React from "react";
import GenreCard from "./CSR/Genre/GenreCard";
import { JetBrainsMono } from "@/public/fonts/JetBrains";

const Genre = () => {
  return (
    <div className="genres px-5 mt-5">
      <h1 className={`text-md font-semibold ${JetBrainsMono.className}`}>
        PICK YOUR FAVOURITE GENRE
      </h1>
      <div className="genresContainer grid grid-cols-2 place-items-center gap-5 mt-5 h-50 overflow-y-scroll">
        {genres.map((genre) => (
          <GenreCard genre={genre} key={genre} />
        ))}
      </div>
    </div>
  );
};

export default Genre;
