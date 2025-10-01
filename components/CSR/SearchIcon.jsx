"use client";
import React from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";
const SearchIcon = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{
        scale: 1,
      }}
      className="bg-accent p-2 rounded-full flex gap-1 items-center cursor-pointer"
    >
      <Search color="white" size={20} />
    </motion.div>
  );
};

export default SearchIcon;
