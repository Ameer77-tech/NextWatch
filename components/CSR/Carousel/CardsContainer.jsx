"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import Card from "./Card";
import { useHomeData } from "@/contexts/HomeData";

const CardsContainer = () => {
  const Trending = useHomeData((state) => state.Trending);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!cardRef.current || !containerRef.current || Trending.length === 0)
      return;

    // Get card width
    const width = cardRef.current.offsetWidth;
    setCardWidth(width);
    console.log("CARD",width);

    // Total scrollable width minus container width
    const gap = 100; // same as your flex gap
    const totalWidth = Trending.length * width + (Trending.length) * gap;
    
    const containerWidth = containerRef.current.offsetWidth;
    setMaxDrag(totalWidth + gap);
    console.log(maxDrag);
  }, [Trending]);

  if (!Trending || Trending.length === 0) return <div>Loading cards...</div>;

  return (
    <motion.div
      ref={containerRef}
      className="cardsContainer flex gap-5 cursor-grab"
      style={{ x }}
      drag="x"
      dragConstraints={{ left: -1880, right: 0 }}
      dragElastic={0.15}
      whileTap={{ cursor: "grabbing" }}
    >
      {Trending.map((movie, i) => (
        <Card key={movie.id} CardRef={i === 0 ? cardRef : null} movie={movie} />
      ))}
    </motion.div>
  );
};

export default CardsContainer;
