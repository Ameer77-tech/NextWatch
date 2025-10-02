"use client";
import React from "react";
import { LucideMenu, X } from "lucide-react";
const MenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen((prev) => !prev)}>
      {isOpen ? <X size={32} /> : <LucideMenu size={32} />}
    </div>
  );
};

export default MenuIcon;
