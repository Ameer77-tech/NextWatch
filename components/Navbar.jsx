"use client";
import React, { useRef, useState } from "react";
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
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const tabs = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "MOVIES",
      href: "/category/movies",
    },
    {
      name: "TVSHOWS",
      href: "/category/tvshows",
    },
  ];
  const [scrollDown, setscrollDown] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (scrollY.getPrevious() < latestValue) {
      setscrollDown(true);
    } else {
      setscrollDown(false);
    }
  });
  const [hoverDivVals, setHoverDivVals] = useState({
    left: 0,
    width: 0,
  });
  const [showHoverDiv, setShowHoverDiv] = useState(false);
  const ulRef = useRef(null);
  const handleEnter = (e) => {
    setShowHoverDiv(true);
    let ulPos = ulRef.current.getBoundingClientRect().left;
    console.log(ulPos);
    const target = e.currentTarget;
    let { left, width } = target.getBoundingClientRect();
    setHoverDivVals({
      left: left - ulPos,
      width,
    });
  };
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
            className={clsx("navbar")}
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
      {/* PC */} {/* PC */} {/* PC */} {/* PC */} {/* PC */} {/* PC */}{" "}
      {/* PC */} {/* PC */} {/* PC */}
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
            className="pcNav bg-background/60 backdrop-blur-md"
          >
            <Logo />
            <div className="nav-end items-center hidden md:flex lg:flex">
              <ul
                onMouseLeave={() => setShowHoverDiv(false)}
                ref={ulRef}
                className={clsx(
                  "md:flex md:min-w-xl relative md:justify-evenly md:p-2 md:font-semibold md:tracking-widest",
                  JetBrainsMono.className
                )}
              >
                {tabs.map((tab, idx) => (
                  <li
                    key={idx}
                    className={clsx(
                      "cursor-pointer",
                      pathName === tab.href ? "text-accent" : "text-white"
                    )}
                    onMouseEnter={handleEnter}
                  >
                    {tab.name}
                  </li>
                ))}
                <AnimatePresence>
                  {showHoverDiv && (
                    <motion.div
                      animate={{
                        width: hoverDivVals.width,
                        left: hoverDivVals.left,
                      }}
                      exit={{
                        width: 0,
                      }}
                      className="absolute h-1 bg-accent rounded bottom-0"
                    ></motion.div>
                  )}
                </AnimatePresence>
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
