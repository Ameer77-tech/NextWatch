import Footer from "@/components/Footer";
import Genre from "@/components/Genre";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NowPlaying from "@/components/NowPlaying";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import TvSeries from "@/components/TvSeries";
import Upcoming from "@/components/Upcoming";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <Hero />
      <NowPlaying />
      <Popular />
      <TopRated />
      <TvSeries />
      <Genre />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default page;
