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
import clsx from "clsx";

const Navbar = () => {
  const tabs = [
    {
      name : "HOME"
    },
    {
      name : "MOVIES"
    },
    {
      name : "TV SHOWS"
    },
    {
      name : "CATEGORIES"
    }

  ]
  const [scrollDown, setscrollDown] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (scrollY.getPrevious() < latestValue) {
      setscrollDown(true);
    } else {
      setscrollDown(false);
    }
  });
  return (
    <>
      <AnimatePresence>
        {/* MOBILE */}
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
        {/* Mobile */}
      </AnimatePresence>
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
            className="pcNav"
          >
            <Logo />
            <div className="nav-end gap-3 items-center hidden md:flex lg:flex">
              <ul className={clsx(
                "md:flex md:min-w-xl md:justify-evenly md:p-5 md:font-semibold md:tracking-wider"
                )}>
                { tabs.map((tab, idx)=>(
                  <li key={idx}>
                    { tab.name }
                  </li>
                )) }
              </ul>
              <SearchIcon />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
