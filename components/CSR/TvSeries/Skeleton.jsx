"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TvSeriesSkeleton = () => {
  return (
    <div className="grid md:grid-cols-6 lg:grid-cols-6 grid-cols-2 gap-7 md:gap-8 w-full px-5 md:px-10 py-5 md:py-10">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="flex flex-col w-full rounded-xl space-y-3">
          <Skeleton className="h-60 md:h-80 w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4 md:w-4/5 rounded" />
            <Skeleton className="h-4 w-1/2 md:w-3/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TvSeriesSkeleton;
