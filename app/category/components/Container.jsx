import React from "react";
import MovieCard from "./MovieCard";
import Relaod from "./Relaod";

const Container = ({ results }) => {
  return (
    <div className="text-background-foreground w-full px-5 place-items-center md:gap-8 gap-7 md:px-55 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:py-10 py-5">
      {results.length < 1 ? (
        <Relaod />
      ) : (
        results?.map((res, idx) => (
          <MovieCard
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
