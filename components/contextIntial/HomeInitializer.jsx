"use client";
import { useHomeData } from "@/contexts/HomeData";
import React, { useEffect } from "react";
const HomeInitializer = ({ data }) => {
  const setHomeData = useHomeData((s) => s.setHomeData);

  useEffect(() => {
    setHomeData(data);
  }, []);

  return null;
};

export default HomeInitializer;
