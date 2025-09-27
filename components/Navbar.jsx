"use client";
import React, { useState } from "react";
import Logo from "./SSR/Logo";
import SearchIcon from "./CSR/SearchIcon";
import MenuIcon from "./CSR/MenuIcon";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
  spring,
} from "motion/react";

const Navbar = () => {
  const [scrollDown, setscrollDown] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (scrollY.getPrevious() < latestValue) {
      setscrollDown(true);
    } else {
      setscrollDown(false);
    }
    console.log(scrollDown);
  });
  return (
    <>
      <AnimatePresence>
        {!scrollDown && (
          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: 0,
              transition: {
                duration: 0.5,
                type: spring,
                stiffness: 190,
                damping: 30,
              },
            }}
            exit={{
              y: "-100%",
              transition: {
                delay: 0.3,
                type: spring,
                stiffness: 180,
                damping: 40,
              },
            }}
            className="navbar"
          >
            <Logo />
            <div className="nav-end flex gap-3 items-center md:hidden lg:hidden">
              <SearchIcon />
              <MenuIcon />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
