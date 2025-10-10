"use server";

const fetchWithRetry = async (url, options = {}, retries = 3, delayMs = 500) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
};

export const fetchShow = async (type, id) => {
  console.log("fetching");
  if (!type || !id) throw new Error("fetchShow: missing type or id");

  const tmdbType =
    type === "movies" || type === "upcoming" || type === "newreleases" || type === "toprated" || type === "popular"
      ? "movie"
      : type === "tvshows"
      ? "tv"
      : null;

  if (!tmdbType) throw new Error(`fetchShow: invalid type "${type}"`);

  const headers = {
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    Accept: "application/json",
  };

  if (!headers.Authorization) throw new Error("TMDB_API_KEY is not defined");

  const baseUrl = `https://api.themoviedb.org/3/${tmdbType}/${id}`;
  try {
    const [details, credits, videos, similar] = await Promise.all([
      fetchWithRetry(`${baseUrl}?language=en-US`, { headers, next: { revalidate: 3600 } }),
      fetchWithRetry(`${baseUrl}/credits?language=en-US`, { headers, next: { revalidate: 3600 } }),
      fetchWithRetry(`${baseUrl}/videos?language=en-US`, { headers, next: { revalidate: 3600 } }),
      fetchWithRetry(`${baseUrl}/similar?language=en-US`, { headers, next: { revalidate: 3600 } }),
    ]);

    return { details, credits, videos, similar };
  } catch (err) {
    console.error("fetchShow error:", err);
    throw err;
  }
};
