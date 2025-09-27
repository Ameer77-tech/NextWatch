import React from "react";
import mockImage from "@/app/assets/mock.jpg";
import Image from "next/image";

const MovieCard = ({ cardRef, title }) => {
  return (
    <div
      ref={cardRef}
      className="bg-slate-500 rounded-lg min-w-35 min-h-50 relative"
    >
      <Image
        src={mockImage}
        alt="image"
        fill
        className="rounded-lg object-cover"
      />
      <p className="absolute bottom-2 text-white opacity-100 font-semibold text-sm text-center left-1/2 -translate-x-1/2 w-full">{ title }</p>
    </div>
  );
};

export default MovieCard;
