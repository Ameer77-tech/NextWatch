"use server";
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import React from "react";

const Heading = ({ name }) => {
  return (
    <div className="relative group w-fit">
      <p
        className={`${JetBrainsMono.className} text-2xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-700 ease-out group-hover:bg-[position:100%_0]`}
      >
        {name}
      </p>

      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:w-full"></span>
    </div>
  );
};

export default Heading;
