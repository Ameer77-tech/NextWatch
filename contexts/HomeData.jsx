"use client";
import { create } from "zustand";

export const useHomeData = create((set) => ({
  Trending: [],
  NowPlaying: [],
  Popular: [],
  TopRated: [],
  TvSeries: [],
  genres: [],
  Upcoming: [],
  loading : true,
  setHomeData: (data) => set((state) => ({ ...state, ...data })),
}));
