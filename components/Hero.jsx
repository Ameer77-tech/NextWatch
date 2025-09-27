
import React from "react";
import Image from "next/image";
import mockImage from "@/app/assets/mock.jpg";
import { motion } from "motion/react";
import { PlayIcon } from "lucide-react";
import { trendingMovies } from "@/app/lib/TrendingMock";
import { Button } from "./ui/button";
import Carousel from "./CSR/Carousel/Carousel";

const Hero = () => {
  return (
    <Carousel />
  );
};

export default Hero;
