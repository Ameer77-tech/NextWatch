"use server"; // ensure this runs on the server in Next.js

export const fetchShow = async (type, id) => {
  if (!type || !id) throw new Error("fetchShow: missing type or id");
  let tmdbType = "";
  if (type === "movies") tmdbType = "movie";
  else if (type === "tvshows") tmdbType = "tv";
  else throw new Error(`fetchShow: invalid type "${type}"`);

  const TMDB_BEARER = process.env.TMDB_API_KEY;
  if (!TMDB_BEARER) throw new Error("TMDB_API_KEY is not defined");

  const headers = {
    Authorization: `Bearer ${TMDB_BEARER}`,
    Accept: "application/json",
  };

  try {
    const detailsRes = await fetch(
      `https://api.themoviedb.org/3/${tmdbType}/${id}?language=en-US`,
      {
        method: "GET",
        headers,
      }
    );
    if (!detailsRes.ok)
      throw new Error(`${detailsRes.status} ${detailsRes.statusText}`);
    const details = await detailsRes.json();
    const creditsRes = await fetch(
      `https://api.themoviedb.org/3/${tmdbType}/${id}/credits?language=en-US`,
      {
        method: "GET",
        headers,
      }
    );
    if (!creditsRes.ok)
      throw new Error(`${creditsRes.status} ${creditsRes.statusText}`);
    const credits = await creditsRes.json();

    const videosRes = await fetch(
      `https://api.themoviedb.org/3/${tmdbType}/${id}/videos?language=en-US`,
      {
        method: "GET",
        headers,
      }
    );
    if (!videosRes.ok)
      throw new Error(`${videosRes.status} ${videosRes.statusText}`);
    const videos = await videosRes.json();

    const similarRes = await fetch(
      `https://api.themoviedb.org/3/${tmdbType}/${id}/similar?language=en-US`,
      {
        method: "GET",
        headers,
      }
    );
    if (!similarRes.ok)
      throw new Error(`${similarRes.status} ${similarRes.statusText}`);
    const similar = await similarRes.json();
    return { details, credits, videos, similar };
  } catch (err) {
    console.error("fetchShow error:", err);
    throw err;
  }
};
