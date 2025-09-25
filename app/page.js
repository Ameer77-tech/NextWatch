import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col md:px-50 lg:px-50">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
