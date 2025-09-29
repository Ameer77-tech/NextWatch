import HomeInitializer from "@/components/contextIntial/HomeInitializer";
import Footer from "@/components/Footer";
import Genre from "@/components/Genre";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NowPlaying from "@/components/NowPlaying";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import TvSeries from "@/components/TvSeries";
import Upcoming from "@/components/Upcoming";
import { Suspense } from "react";

const TMDB_KEY = process.env.TMDB_API_KEY;
const TMDB_URL = "https://api.themoviedb.org";

const getHomeData = async () => {
  const key = process.env.TMDB_API_KEY;
  const url = process.env.TMDB_URL;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    next: { revalidate: 3600 }, // ISR caching
  };

  try {
    const [
      Trending,
      NowPlaying,
      Popular,
      TopRated,
      TvSeries,
      Upcoming,
      TvGenres,
      MovieGenres,
    ] = await Promise.all([
      fetch(`${url}/3/trending/all/day?language=en-US&page=1`, options).then(
        (r) => r.json()
      ),
      fetch(`${url}/3/movie/now_playing?language=en-US&page=1`, options).then(
        (r) => r.json()
      ),
      fetch(`${url}/3/movie/popular?language=en-US&page=1`, options).then((r) =>
        r.json()
      ),
      fetch(`${url}/3/movie/top_rated?language=en-US&page=1`, options).then(
        (r) => r.json()
      ),
      fetch(`${url}/3/tv/popular?language=en-US&page=1`, options).then((r) =>
        r.json()
      ),
      fetch(`${url}/3/movie/upcoming?language=en-US&page=1`, options).then(
        (r) => r.json()
      ),
      fetch(`${url}/3/genre/tv/list?language=en`, options).then((r) =>
        r.json()
      ),
      fetch(`${url}/3/genre/movie/list?language=en`, options).then((r) =>
        r.json()
      ),
    ]);
    const topTrending = (Trending?.results || [])
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 5)
      .map((t) => {
        const genres = t.genre_ids
          ?.map((g) => {
            const genre = MovieGenres.genres?.find((genre) => genre.id === g);
            return genre ? genre.name : null;
          })
          .filter((name) => name !== null);
        return {
          ...t,
          genres,
        };
      });
    const topNowPlaying = (NowPlaying?.results || []).slice(0, 10);
    const topPopular = (Popular?.results || []).slice(0, 10);
    const topRated = (TopRated?.results || []).slice(0, 10);
    const topTvSeries = (TvSeries?.results || []).slice(0, 10);
    const topUpcoming = (Upcoming?.results || []).slice(0, 10);

    return {
      Trending: topTrending,
      NowPlaying: topNowPlaying,
      Popular: topPopular,
      TopRated: topRated,
      TvSeries: topTvSeries,
      Upcoming: topUpcoming,
    };
  } catch (err) {
    console.error("Failed to fetch home data:", err);
    return {
      Trending: [],
      NowPlaying: [],
      Popular: [],
      TopRated: [],
      TvSeries: [],
      Upcoming: [],
    };
  }
};

const Page = async () => {
  const homeData = await getHomeData();

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <HomeInitializer data={homeData} />
      <Suspense fallback={<p>LOADING..........</p>}>
        <Hero />
        <NowPlaying />
        <Popular />
        <TopRated />
        <TvSeries />
        <Genre />
        <Upcoming />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Page;
