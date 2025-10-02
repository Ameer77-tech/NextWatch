import Image from "next/image";
import React from "react";

const MovieCard = ({ name, source }) => {
  return (
    <div className="flex flex-col w-full rounded-xl">
      <div
        className={`relative md:h-80 md:w-full h-60 w-full ${
          !source && "flex justify-center items-center"
        }`}
      >
        {source ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${source}`}
            fill
            alt="image"
            className="rounded-xl"
          />
        ) : (
          <Image
            src="/broken-image.png"
            width={100}
            height={100}
            alt="broken image"
            className="rounded-xl"
          />
        )}
      </div>
      <div className="text-center font-bold md:font-semibold bg-background md:text-md text-sm p-5 md:tracking-wider tracking-wide">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
