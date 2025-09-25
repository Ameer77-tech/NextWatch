import React from "react";
import { LucideMenu, Search } from "lucide-react";
import { JetBrainsMono } from "@/public/fonts/JetBrains";

import Image from "next/image";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-start flex items-center">
        <Image src="/favicon.png" alt="logo" width={50} height={50} />
        <h1 className={`${JetBrainsMono.className}`}>NextWatch</h1>
      </div>
      <div className="nav-end flex gap-3 items-center md:hidden lg:hidden">
        <div className="bg-secondary p-3 rounded-full">
          <Search color="white" />
        </div>
        <div>
          <LucideMenu size={32} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
