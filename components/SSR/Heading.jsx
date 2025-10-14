import React from "react";
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Heading = ({ name }) => {
  return (
    <div className="flex justify-between items-center md:py-6 rounded-lg">
      {/* Heading */}
      <h1
        className={`relative text-lg md:text-3xl font-semibold text-white tracking-tight ${JetBrainsMono.className}`}
      >
        <span className="absolute left-0 bottom-0 h-[2px] w-1/2 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:w-full"></span>
        <p className="relative z-10">{name}</p>
      </h1>

      {/* Button */}
      <Link
        href={`/category/${
          name.trim().toLowerCase().replace(/\s+/g, "") === "tvseries"
            ? "tvshows"
            : name.trim().toLowerCase().replace(/\s+/g, "")
        }?page=1`}
      >
        <Button
          variant="ghost"
          className="group flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white/90 border border-white/10 focus:text-primary focus:border-primary/40 hover:border-primary/40 hover:text-primary transition-all duration-300 hover:bg-transparent active:scale-[0.97]"
        >
          <span>See All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </Link>
    </div>
  );
};

export default Heading;
