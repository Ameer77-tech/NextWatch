export const fetchShow = async (t, id) => {
  let type = "";
  switch (t) {
    case "movies":
      type = "movie";
      break;
    case "tvshows":
      type = "tv";
      break;
    default:
      console.error("Invalid type:", t);
      return null;
  }

  const url = process.env.TMDB_URL;
  const key = process.env.TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
    next: { revalidate: 3600 },
  };

  const endpoint = `${url}/3/${type}/${id}?language=en-US`;
  try {
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`${res.status} ${res.statusText} - ${text}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("fetchShow error:", err);
    throw err;
  }
};
