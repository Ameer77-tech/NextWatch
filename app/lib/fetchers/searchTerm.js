export const SearchShow = async (term) => {
  const TMDB_BEARER = process.env.TMDB_API_KEY;
  const url = process.env.TMDB_URL;
  if (!TMDB_BEARER) throw new Error("TMDB_API_KEY is not defined");

  const headers = {
    Authorization: `Bearer ${TMDB_BEARER}`,
    Accept: "application/json",
  };
  const options = {
    method: "GET",
    headers,
    next: { revalidate: 3600 },
  };

  if (!term || term == "") {
    try {
      const results = await fetch(
        `${url}/3/trending/all/week?language=en-US`,
        options
      ).then((r) => r.json());
      return { results };
    } catch (err) {
      console.log(err);
    }
  } else {
    try {

      const results = await fetch(
        `${url}/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`,
        options
      ).then((r) => r.json());
      return { results };
    } catch (err) {
      console.log(err);
    }
  }
};
