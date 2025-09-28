"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "motion/react";
import Card from "./Card";
import { useHomeData } from "@/contexts/HomeData";

const CardsContainer = () => {
  const Trending = useHomeData((state) => state.trending);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [cardW, setCardW] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);

  const x = useMotionValue(0);

  // calculate drag constraints once cards are rendered
  useEffect(() => {
    if (cardRef.current && containerRef.current && Trending.length > 0) {
      const cardWidth = cardRef.current.offsetWidth;
      setCardW(cardWidth);
      const containerWidth = containerRef.current.offsetWidth;
      const totalCards = cardWidth * Trending.length;
      setMaxDrag(totalCards - containerWidth);
    }
    console.log(Trending);
  }, [Trending]);

  const handleDragEnd = () => {
    const nearest = Math.round(x.get() / cardW) * cardW;
    animate(x, nearest);
  };

  if (!Trending || Trending.length === 0) return <div>Loading cards...</div>;

  return (
    <motion.div
      onDragEnd={handleDragEnd}
      style={{ x }}
      drag="x"
      dragConstraints={{ left: -maxDrag, right: 0 }}
      ref={containerRef}
      className="cardsContainer flex gap-4"
    >
      {Trending.map((movie, i) => (
        <Card key={movie.id} CardRef={i === 0 ? cardRef : null} movie={movie} />
      ))}
    </motion.div>
  );
};

export default CardsContainer;
