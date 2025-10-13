"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Arrows from "@/components/Arrows";
import { useHomeData } from "@/contexts/HomeData";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Info, StarIcon } from "lucide-react";
import Link from "next/link";

const PcHero = () => {
  const trending = useHomeData((s) => s.Trending) || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const [type, setType] = useState("");

  const intervalRef = useRef(null);

  // Determine type based on media_type
  useEffect(() => {
    if (!trending[slideIndex]) return;

    switch (trending[slideIndex].media_type) {
      case "movie":
        setType("movies");
        break;
      case "tv":
        setType("tvshows");
        break;
      default:
        setType("");
        console.warn("Invalid Type");
        break;
    }
  }, [trending, slideIndex]);

  // Auto-slide interval
  useEffect(() => {
    if (!trending.length) return;

    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev === trending.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [trending.length]);

  // Manual next/prev handlers
  const handleNext = () => {
    setSlideIndex((prev) => (prev === trending.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? trending.length - 1 : prev - 1));
  };

  const posterVariants = {
    initial: { scale: 0.5 },
    animate: { scale: 1 },
  };

  if (!trending || trending.length === 0)
    return (
      <div className="hidden md:flex flex-col space-y-3 z-100">
        <Skeleton className="h-100 w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    );

  return (
    <div className="hidden md:block relative overflow-hidden">
      <motion.div
        animate={{ x: `-${slideIndex * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="flex md:min-h-screen relative"
      >
        {trending.map((movie) => (
          <div className="flex-shrink-0 w-full min-h-screen" key={movie.id}>
            <div
              className={`relative w-full h-full ${
                movie.backdrop_path ? "flex justify-center items-center" : ""
              }`}
            >
              {movie.backdrop_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  alt={movie.title || movie.name || "Poster"}
                  priority={slideIndex === 0}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src="/broken-image.png"
                  fill
                  alt={movie.title || movie.name || "Poster"}
                />
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Hero overlay */}
      <div className="absolute inset-0 flex h-full items-center gap-30 text-white bg-black/70 p-6 md:p-20">
        <div>
          <h1 className="text-3xl max-w-xl md:text-4xl font-bold mb-2">
            {trending[slideIndex]?.name || trending[slideIndex]?.title}
          </h1>
          <p className="text-sm opacity-80 md:text-lg max-w-xl mb-4">
            {trending[slideIndex]?.overview}
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {trending[slideIndex].genres.map((genre, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-2 py-1 rounded bg-muted text-muted-foreground text-sm"
              >
                {genre}
              </div>
            ))}
            <div className="flex justify-center items-center px-2 py-1 rounded bg-red-600 text-sm">
              <StarIcon size={15} fill="yellow" />{" "}
              {trending[slideIndex]?.vote_average.toFixed(1)}
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded border border-white text-sm">
              {new Date(
                trending[slideIndex]?.release_date ||
                  trending[slideIndex]?.first_air_date
              ).getFullYear()}
            </div>
          </div>
          <div className="flex gap-4">
            <Link href={`/category/${type}/${trending[slideIndex].id}`}>
              <Button variant="destructive" className="cursor-pointer">
                Play Trailer
              </Button>
            </Link>
            <Link href={`/category/${type}/${trending[slideIndex].id}/#info`}>
              <Button
                variant="secondary"
                className="flex items-center justify-center cursor-pointer"
              >
                <p>More Info</p>
                <Info />
              </Button>
            </Link>
          </div>
        </div>

        {/* Poster */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            variants={posterVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-3/6 w-50 rounded-2xl relative"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${trending[slideIndex]?.poster_path}`}
              fill
              alt={trending[slideIndex]?.title || trending[slideIndex]?.name}
              className="rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <Arrows handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default PcHero;
