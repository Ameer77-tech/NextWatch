import Genre from "@/components/Genre";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopRated from "@/components/TopRated";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col md:px-50 lg:px-50">
      <Navbar />
      <Hero />
      <Genre />
      <TopRated />
      <TopRated />
      <TopRated />
      <TopRated />
      <TopRated />
    </div>
  );
};

export default page;
