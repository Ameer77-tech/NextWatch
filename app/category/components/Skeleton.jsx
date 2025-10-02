"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoad = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-7 md:gap-8 w-full px-5 md:px-55 py-5 md:py-10">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="flex flex-col w-full rounded-xl space-y-3">
          {/* Skeleton for the image */}
          <Skeleton className="h-60 md:h-80 w-full rounded-xl" />
          {/* Skeleton for the text */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4 md:w-4/5 rounded" />
            <Skeleton className="h-4 w-1/2 md:w-3/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoad;
