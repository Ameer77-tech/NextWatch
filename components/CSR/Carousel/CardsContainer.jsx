"use client";
import React, { useEffect, useRef, useState } from "react";
import { trendingMovies } from "@/app/lib/TrendingMock";
import { motion, animate, useMotionValue } from "motion/react";
import Card from "./Card";
const CardsContainer = () => {
  const containerRef = useRef(null);
  const CardRef = useRef(null);
  const [cardW, setcardW] = useState(0);
  const [MaxDrag, setMaxDrag] = useState(0);
  useEffect(() => {
    if (CardRef.current && containerRef.current) {
      const cardW = CardRef.current.offsetWidth;
      setcardW(cardW);
      const containerW = containerRef.current.offsetWidth;
      const totalCards = cardW * trendingMovies.length;
      setMaxDrag(totalCards - containerW);
    }
  }, []);

  const x = useMotionValue(0);
  const handleDragEnd = (event) => {
    const nearest = Math.round(x.get() / 395) * 395;
    animate(x, nearest);
  };
  return (
    <>
      <motion.div
        onDragEnd={handleDragEnd}
        style={{ x }}
        drag="x"
        dragConstraints={{
          left: -MaxDrag,
          right: 0,
        }}
        ref={containerRef}
        className="cardsContainer"
      >
        {trendingMovies.map((movie) => (
          <Card key={movie.id} CardRef={CardRef} />
        ))}
      </motion.div>
      
    </>
  );
};

export default CardsContainer;
