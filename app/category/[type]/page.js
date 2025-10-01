import { fetchMovies } from "@/app/lib/fetchers/movies";
import React from "react";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const page = parseInt(params.page);
  console.log(page);

  const response = await fetchMovies(page);
  console.log(response);

  return (
    <div className="md:mt-15">
      {response.results?.map((movie, idx) => {
        return <p key={idx}>{movie?.title || movie?.name}</p>;
      })}
    </div>
  );
};

export default page;
