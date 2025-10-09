import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SimilarCard = ({ title, poster, type, showId }) => {
  return (
    <Link href={`/category/${type}/${showId}`}>
      <div className="md:w-50 min-w-50 flex flex-col space-y-3 hover:scale-105 transition-all ease focus:scale-105 duration-300">
        <AspectRatio
          ratio={3 / 4}
          className="bg-secondary flex justify-center items-center rounded-xl"
        >
          {poster ? (
            <Image
              loading="lazy"
              fetchPriority="low"
              src={`https://image.tmdb.org/t/p/original${poster}`}
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
        </AspectRatio>
        <h1 className="text-center text-wrap text-sm">{title}</h1>
      </div>
    </Link>
  );
};

export default SimilarCard;
