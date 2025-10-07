import MovieCard from "@/app/category/components/MovieCard";
import React from "react";

const Container = ({ results }) => {
  return (
    <div className="text-background-foreground relative w-full px-5 place-items-center md:gap-8 gap-7 md:px-55 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:py-10 py-5 mt-10">
      {results.length < 1 ? (
        <p className="absolute text-muted-foreground">NOT FOUND</p>
      ) : (
        results?.map((res, idx) => (
          <MovieCard
            id={res.id}
            type={res.media_type == "tv" ? "tvshows" : "movies"}
            key={res.id}
            name={res.title || res.name}
            source={res.poster_path || res.backdrop_path}
          />
        ))
      )}
    </div>
  );
};

export default Container;
