import { JetBrainsMono } from "@/public/fonts/JetBrains";
import React from "react";
import TrailerPlayer from "./Video";

const Embed = ({ video, title }) => {
  const source = video.results
    ?.filter((v) => v.type == "Trailer" && v.official)
    .sort((a, b) => b.published_at - a.published_at)[0];

  return (
    <div className="w-full h-auto mx-auto md:p-20 p-5 flex flex-col space-y-4 justify-center items-center relative">
      <h1
        className={`${JetBrainsMono.className} tracking-tighter font-semibold md:w-4/6 w-full md:text-4xl `}
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
