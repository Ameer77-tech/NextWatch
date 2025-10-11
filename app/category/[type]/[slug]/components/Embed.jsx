import { JetBrainsMono } from "@/public/fonts/JetBrains";
import React from "react";
import TrailerPlayer from "./Video";

const Embed = ({ video, title }) => {
  const source =
    video.results.length === 1
      ? video.results[0]
      : video.results
          ?.filter(
            (v) =>
              v.type.toLowerCase() == "trailer" ||
              (v.type.toLowerCase() == "official trailer" && v.official)
          )
          .sort((a, b) => b.published_at - a.published_at)[0];

  return (
    <div className="w-full h-auto mx-auto md:p-20 p-5 flex flex-col space-y-4 justify-center items-center relative">
      <h1
        className={`${JetBrainsMono.className} 
    text-4xl md:text-6xl 
    text-center
    font-extrabold 
    tracking-tight 
    text-transparent 
    bg-clip-text 
    uppercase
    bg-gradient-to-r from-white via-gray-200 to-gray-400 
    drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]`}
      >
        {title}
      </h1>
      <div className="md:w-4/6 w-full md:h-120">
        <TrailerPlayer ytKey={source?.key} />
      </div>
    </div>
  );
};

export default Embed;
