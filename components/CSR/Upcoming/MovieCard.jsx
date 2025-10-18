import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Info } from "lucide-react";
import Link from "next/link";

const MovieCard = ({ cardRef, movie }) => {
  const [show, setShow] = useState(false);
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex flex-col md:overflow-hidden border-1 active:border-red-600 active:rounded-lg"
      variants={cardVariants}
      style={{
        flex: `0 0 calc(${100 / 5}% - 16px)`,
      }}
    >
      <Link href={`/category/movies/${movie.id}`}>
        <motion.div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="bg-slate-500 rounded-t-lg min-w-35 md:min-w-60 min-h-50 md:min-h-70 relative"
        >
          <Image
            sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : ""
            }
            alt="image"
            fill
            className="rounded-t-lg object-cover"
          />
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/50"
              >
                <motion.div
                  initial={{
                    scale: 1,
                  }}
                  animate={{
                    scale: 1.2,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1,
                  }}
                >
                  {" "}
                  <Info />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
      <div className="md:h-25 h-20 w-full bg-secondary p-2 flex flex-col justify-evenly">
        <h1 className="text-xs md:text-sm font-semibold">
          {movie?.name || movie?.title}
        </h1>
        <p className="text-xs opacity-75">
          ⭐ {movie?.vote_average.toFixed(1)}
        </p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
