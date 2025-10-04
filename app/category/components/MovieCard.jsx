"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Info } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const MovieCard = ({ name, source }) => {
  const [show, setShow] = useState(false);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef);
  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: cardInView ? 1 : 0,
        y: cardInView ? 0 : 20,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }}
      viewport={{
        once: true,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex flex-col w-full rounded-xl select-none"
    >
      <AspectRatio
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        ratio={3 / 4}
        className={`relative  ${!source && "flex justify-center items-center"}`}
      >
        {source ? (
          <Image
            loading="lazy"
            fetchPriority="low"
            sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
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
      </AspectRatio>
      <div className="text-center font-bold md:font-semibold bg-background md:text-md text-sm p-5 md:tracking-wider tracking-wide">
        {name}
      </div>
    </motion.div>
  );
};

export default MovieCard;
