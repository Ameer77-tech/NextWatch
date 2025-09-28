"use client";
import { create } from "zustand";

export const useHomeData = create((set) => ({
  trending: [],
  nowPlaying: [],
  popular: [],
  topRated: [],
  tvSeries: [],
  genres: [],
  upcoming: [],
  setHomeData: (data) => set((state) => ({ ...state, ...data })),
}));
