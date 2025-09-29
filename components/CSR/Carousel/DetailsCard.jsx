"use client";
import React, { useEffect, useState } from "react";
import { PlayIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { AnimatePresence, motion, useAnimation } from "motion/react";

const DetailsCard = ({ slideIndex, Trending }) => {
  const [show, setShow] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      });
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await controls.start({
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
    };

    runAnimation();
  }, [controls]);
  return (
    <div className="bg-secondary px-5 py-2 z-90 absolute bottom-10 left-1/2 -translate-x-1/2 w-5/6 h-[130px] rounded-4xl flex flex-col justify-center">
      <p className="text-xs tracking-wide opacity-80">TRENDING</p>
      <h1 className="text-md max-w-3/4 text-wrap">
        {Trending[slideIndex]?.name || Trending[slideIndex]?.title}
      </h1>
      <p>
        <span className="opacity-80">
          {Trending[slideIndex]?.original_language.toUpperCase()}
        </span>
      </p>
      <p className="opacity-80 text-sm text-accent">
        {Trending[slideIndex]?.genres?.map((g, idx) =>
          idx == Trending[slideIndex]?.genres?.length - 1 ? g : g + ", "
        )}
      </p>
      <Button
        variant="ghost"
        className="absolute right-5 h-auto w-auto flex bg-accent justify-center items-center rounded-full
        cursor-pointer"
      >
        <PlayIcon size={20} fill="white" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          className="text-xs absolute -top-8 bg-secondary-foreground text-black p-1 rounded-lg"
        >
          play trailer
        </motion.div>
      </Button>
    </div>
  );
};

export default DetailsCard;
