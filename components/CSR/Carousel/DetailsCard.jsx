"use client"
import React from "react";
import { PlayIcon } from "lucide-react";
import { Button } from "../../ui/button";

const DetailsCard = () => {
  return (
    <div className="bg-secondary px-5 py-2 z-90 absolute bottom-10 w-[320px] h-[130px] rounded-4xl flex flex-col justify-center">
      <p className="text-xs tracking-wide opacity-80">TRENDING</p>
      <h1 className="text-md">Demon Slayer</h1>
      <p>
        <span className="text-accent">A</span>
        <span className="opacity-80">. English</span>
      </p>
      <p className="opacity-80 text-sm">HORROR</p>
      <Button
        variant="ghost"
        className="absolute right-10 h-11 w-11 flex bg-accent md:bg-transparent justify-center items-center rounded-full
        "
      >
        <PlayIcon size={20} fill="white" />
      </Button>
    </div>
  );
};

export default DetailsCard;
