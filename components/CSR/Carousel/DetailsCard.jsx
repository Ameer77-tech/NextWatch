"use client";
import React, { useState } from "react";
import { PlayIcon } from "lucide-react";
import { Button } from "../../ui/button";

const DetailsCard = ({ slideIndex, Trending }) => {
  if (!Trending || Trending.length === 0) {
    return null;
  }
  return (
    <div className="bg-secondary px-5 py-2 z-90 absolute bottom-5 left-1/2 -translate-x-1/2 w-5/6 h-[130px] rounded-4xl flex flex-col justify-center">
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
        <div
          className="text-xs absolute -top-8 bg-secondary-foreground text-black p-1 rounded-lg"
        >
          play trailer
        </div>
      </Button>
    </div>
  );
};

export default DetailsCard;
