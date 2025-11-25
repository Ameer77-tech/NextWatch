"use client";
import React, { Suspense } from "react";
import Navbar from "./Navbar";

const NavBarClient = () => {
  return (
    <Suspense fallback={""}>
      <Navbar />
    </Suspense>
  );
};

export default NavBarClient;
