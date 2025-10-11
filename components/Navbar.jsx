"use client";
import React, { useEffect, useRef, useState } from "react";
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
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setNavSize] = useState(0);
  const navRef = useRef(null);

  const tabs = [
    { name: "HOME", href: "/" },
    { name: "MOVIES", href: "/category/movies?page=1" },
    { name: "TVSHOWS", href: "/category/tvshows?page=1" },
  ];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const isActive = (tabHref) => {
    const tabUrl = new URL(tabHref, "http://localhost");
    const tabPathname = tabUrl.pathname;

    // match purely by pathname
    if (pathname === "/" && tabPathname === "/") return true;
    if (
      pathname.startsWith("/category/movies") &&
      tabPathname.startsWith("/category/movies")
    )
      return true;
    if (
      pathname.startsWith("/category/tvshows") &&
      tabPathname.startsWith("/category/tvshows")
    )
      return true;

    return false;
  };

  const [scrollDown, setScrollDown] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (scrollY.getPrevious() < latestValue) setScrollDown(true);
    else setScrollDown(false);
  });

  useEffect(() => {
    if (!navRef.current) return;
    setNavSize(navRef.current.getBoundingClientRect().height);
  }, [navRef]);

  const [hoverDivVals, setHoverDivVals] = useState({ left: 0, width: 0 });
  const [showHoverDiv, setShowHoverDiv] = useState(false);
  const ulRef = useRef(null);

  const handleEnter = (e) => {
    setShowHoverDiv(true);
    const ulPos = ulRef.current.getBoundingClientRect().left;
    const target = e.currentTarget;
    const { left, width } = target.getBoundingClientRect();
    setHoverDivVals({ left: left - ulPos, width });
  };

  return (
    <>
      <AnimatePresence>
        {/* MOBILE NAVBAR */}
        {!scrollDown && (
          <motion.div
            ref={navRef}
            initial={{ y: "-100%" }}
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
            <div className="nav-end flex gap-3 items-center md:hidden lg:hidden z-200">
              <SearchIcon />
              <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden lg:hidden fixed inset-0 bg-black/70 z-95"
          >
            <motion.div
              initial={{ y: -200 }}
              animate={{
                y: 0,
                transition: { type: "spring", stiffness: 140, damping: 25 },
              }}
              exit={{ y: -200 }}
              style={{
                top: `${navSize}px`,
              }}
              className="absolute flex flex-col space-y-5 left-0 h-auto p-5 w-full bg-background border-t border-white/10 rounded-t-2xl"
            >
              {tabs.map((tab, idx) => (
                <Link
                  href={tab.href}
                  key={idx}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="link"
                    className={clsx(
                      "text-white relative w-full select-none text-lg",
                      isActive(tab.href)
                        ? "text-accent after:absolute after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:w-full"
                        : "text-white"
                    )}
                  >
                    {tab.name}
                  </Button>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP NAVBAR */}
      <AnimatePresence>
        {!scrollDown && (
          <motion.div
            initial={{ y: "-100%" }}
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
                  <Link href={tab.href} key={idx}>
                    <li
                      className={clsx(
                        "cursor-pointer",
                        isActive(tab.href) ? "text-accent" : "text-white"
                      )}
                      onMouseEnter={handleEnter}
                    >
                      {tab.name}
                    </li>
                  </Link>
                ))}
                <AnimatePresence>
                  {showHoverDiv && (
                    <motion.div
                      animate={{
                        width: hoverDivVals.width,
                        left: hoverDivVals.left,
                      }}
                      exit={{ width: 0 }}
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
