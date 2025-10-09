import { JetBrainsMono } from "@/public/fonts/JetBrains";
import React from "react";
import SimilarCard from "./SimilarCard";

const Similar = ({ data, type }) => {
  console.log(data);

  return (
    <div className="relative w-full h-auto mt-15 flex justify-center">
      <div
        className={`md:w-5/6 ${JetBrainsMono.className}
        w-full h-auto px-7 p-5 md:p-10 flex flex-col justify-start space-y-7`}
      >
        <h1
          className="capital inline relative
        after:md:bottom-0 after:md:left-0 after:md:w-50 after:md:h-[3px] bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 
        font-bold text-2xl md:text-3xl after:bg-accent after:h-[2px] after:w-30 after:absolute after:bottom-0 after:left-3"
        >
          Similar
        </h1>
        <div className="w-full md:w-full">
          <div className="md:w-full px-3 flex space-x-5 overflow-scroll md:flex-wrap md:justify-center md:items-center md:space-y-10">
            {data.map((show, idx) => (
              <SimilarCard
                key={show.id}
                title={show?.title || show?.name}
                poster={show.poster_path}
                type={type}
                showId={show.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;
