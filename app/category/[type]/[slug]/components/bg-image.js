import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const BgImage = ({ path }) => {
  return (
    <>
      <div className="fixed top-0 select-none left-0 h-screen w-screen blur-sm">
        <Image
          loading="lazy"
          fetchPriority="high"
          src={`https://image.tmdb.org/t/p/original${path}`}
          fill
          alt="image"
        />
      </div>
    </>
  );
};

export default BgImage;
