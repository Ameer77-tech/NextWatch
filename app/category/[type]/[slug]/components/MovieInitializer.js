"use client";
import { useMovieStore } from "@/contexts/MovieStore";
import React, { useEffect } from "react";

const MovieInitializer = ({ data }) => {
  const setMovieStore = useMovieStore((s) => s.setMovieStore);
  useEffect(() => {
    setMovieStore(data);
  }, []);
  return null;
};

export default MovieInitializer;
