import React from "react";
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Heading = ({ name }) => {
  return (
    <div className="flex justify-between items-center py-6 px-8 bg-card border border-ring rounded-lg shadow-lg">
      <h1
        className={`relative text-lg md:text-2xl z-10 font-bold text-primary-foreground ${JetBrainsMono.className}`}
      >
        <span className="absolute inset-0 bg-gradient-to-r -z-10 from-primary to-secondary w-1/2 h-full rounded-md"></span>
        <p className="z-10 ">{name}</p>
      </h1>

      {/* Button */}
      <Link href={`/category/${name.trim().toLowerCase().replace(/\s+/g, "")}`}>
        <Button
          variant="destructive"
          className="cursor-pointer hover:bg-destructive/90 transition-colors"
        >
          See All
        </Button>
      </Link>
    </div>
  );
};

export default Heading;
