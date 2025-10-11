"use client";
import { useMovieStore } from "@/contexts/MovieStore";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const details = useMovieStore((s) => s.details) || {};
  const credits = useMovieStore((s) => s.credits) || {};
  const [expanded, setexpanded] = useState(false);

  const sortedCast = (credits?.cast || [])
    .slice()
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 10);
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "instant" });
    }
  }, [pathname]);
  const title =
    details?.original_title || details?.title || details?.name || "Untitled";
  const release = details?.release_date || details?.first_air_date || "—";

  return (
    <section
      className="w-full flex justify-center px-4 md:px-8 lg:px-20"
      id="info"
    >
      <div className="w-full max-w-6xl justify-center bg-background/20 items-center backdrop-blur-sm rounded-lg border border-border p-4 md:p-6 flex flex-col md:flex-row gap-5 md:items-start ">
        <div className="md:w-1/3 w-50 flex-shrink-0">
          <AspectRatio
            ratio={3 / 4}
            className="w-full rounded-xl overflow-hidden shadow-lg"
          >
            {details.poster_path ? (
              <Image
                loading="eager"
                fetchPriority="high"
                src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
                fill
                alt={title}
                className="object-cover"
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
              />
            ) : (
              <div className="bg-muted w-full h-full flex items-center justify-center text-sm text-muted-foreground">
                No Poster
              </div>
            )}
          </AspectRatio>
        </div>

        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                {title}
              </h1>
              {details.tagline ? (
                <p className="text-sm md:text-base text-gray-300 italic">
                  {details.tagline}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-2 mt-2">
                {details.genres?.map((g) => (
                  <span
                    key={g.id}
                    className="text-xs md:text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-border"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:text-right text-left">
              <div className="text-xs text-white/70">
                {details?.type !== undefined ? "Seasons" : "Runtime"}
              </div>
              <div className="font-medium">
                {details?.type !== undefined
                  ? details?.number_of_seasons
                  : details?.runtime}
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 md:flex-col md:justify-center md:items-end">
              <div className="md:text-right text-left">
                <div className="text-xs text-white/70">Release</div>
                <div className="font-medium">{release}</div>
              </div>

              <div className="md:text-right text-left md:block flex items-center space-x-2">
                <div className="text-xs text-white/50">Rating</div>
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="text-xs font-semibold text-white">
                    ⭐ {(details.vote_average || 0).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {details.overview && (
            <p
              onClick={() => setexpanded((prev) => !prev)}
              className={clsx(
                "text-sm md:text-base text-white/85 transition-all ease duration-300",
                expanded ? "" : "line-clamp-4"
              )}
            >
              {details.overview}
            </p>
          )}

          <div className="mt-2">
            <h3 className="text-sm md:text-base font-medium mb-2">Top Cast</h3>
            <div className="md:flex md:flex-wrap grid grid-cols-2 place-items-center md:items-center gap-3 pb-2">
              {sortedCast.length === 0 && (
                <div className="text-sm text-muted-foreground">
                  No cast info
                </div>
              )}
              {sortedCast.map((c) => (
                <div
                  key={c.id || c.credit_id}
                  className="flex-shrink-0 max-w-full md:w-40 bg-background/10 border border-border rounded-lg p-2 flex items-center gap-2"
                >
                  <div className="w-16 h-16 relative rounded-full overflow-hidden bg-muted">
                    {c.profile_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w185${c.profile_path}`}
                        alt={c.name}
                        fill
                        className="rounded-full object-cover"
                        sizes="80px"
                        loading="lazy"
                        fetchPriority="low"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                        {c.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-semibold truncate">
                      {c.name}
                    </div>
                    <div className="text-xs text-white/70 truncate">
                      {c.character || ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// ...existing code...
