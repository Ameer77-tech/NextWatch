import Image from "next/image";
import React from "react";

const BgImage = ({ path }) => {
  return (
    <>
      <div className="fixed top-0 select-none left-0 h-screen w-screen blur opacity-70">
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
