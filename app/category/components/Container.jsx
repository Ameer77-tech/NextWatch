import React from "react";
import MovieCard from "./MovieCard";
import Reload from "./Reload";

const Container = ({ results, type }) => {
  return (
    <div className="text-background-foreground w-full px-5 place-items-center md:gap-8 gap-7 md:px-55 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:py-10 py-5">
      {results.length < 1 ? (
        <Reload />
      ) : (
        results
          ?.sort((a, b) => b.popularity - a.popularity)
          .map((res, idx) => (
            <MovieCard
              id={res.id}
              type={type}
              key={res.id}
              name={res.title || res.name}
              source={res.poster_path}
            />
          ))
      )}
    </div>
  );
};

export default Container;
