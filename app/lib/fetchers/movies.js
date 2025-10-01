import { revalidatePath } from "next/cache";

export const fetchMovies = async (page) => {
  const url = `${
    process.env.TMDB_URL
  }//3/movie/popular?language=en-US&page=${page.toString()}'`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: { revalidate: 300 },
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response;
};
