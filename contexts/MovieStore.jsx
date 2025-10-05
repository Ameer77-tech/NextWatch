import { create } from "zustand";

export const useMovieStore = create((set) => ({
  details: {},
  credits: {},
  video: {},
  similar: [],
  setMovieStore: (data) => set((state) => ({ ...state, ...data })),
}));
