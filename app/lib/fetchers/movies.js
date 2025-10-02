export const fetchMovies = async (t, page = 1) => {
  let type = "";
  switch (t) {
    case "movies":
      type = "movie";
      break;
    case "tvshows":
      type = "tv";
      break;
    default:
      throw new Error("INVALID TYPE OR PATH");
  }

  const safePage = Math.max(1, Math.min(500, page)); // TMDb limit
  const url = `${process.env.TMDB_URL}/3/${type}/popular?language=en-US&page=${safePage}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: { revalidate: 300 },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      console.error("TMDB API error:", res.status, res.statusText);
      return { results: [] };
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return { results: [] };
  }
};
