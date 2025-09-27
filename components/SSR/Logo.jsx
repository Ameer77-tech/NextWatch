import React from "react";
import Image from "next/image";
import { JetBrainsMono } from "@/public/fonts/JetBrains";

const Logo = () => {
  return (
    <div className="nav-start flex items-center">
      <Image src="/favicon.png" alt="logo" width={50} height={50} />
      <h1 className={`${JetBrainsMono.className} text-2xl`}>NextWatch</h1>
    </div>
  );
};

export default Logo;
