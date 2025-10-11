import React from "react";
import Image from "next/image";
import { JetBrainsMono } from "@/public/fonts/JetBrains";

const Logo = () => {
  return (
    <div className="nav-start flex items-center">
      <Image src="/favicon.png" alt="logo" width={30} height={30} />
      <h1 className="font-medium ml-2 w-20 leading-4 text-xl text-white">
        Next Watch
      </h1>
    </div>
  );
};

export default Logo;
