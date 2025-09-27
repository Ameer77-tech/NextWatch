import Footer from "@/components/Footer";
import Genre from "@/components/Genre";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NowPlaying from "@/components/NowPlaying";
import TopRated from "@/components/TopRated";
import TvSeries from "@/components/TvSeries";
import Upcoming from "@/components/Upcoming";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col md:px-50 lg:px-50">
      <Navbar />
      <Hero />
      <NowPlaying />
      <TopRated />
      <TvSeries />
      <Genre />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default page;
