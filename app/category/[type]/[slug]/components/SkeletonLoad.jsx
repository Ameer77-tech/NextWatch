import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonLoad = () => {
  return (
    <div className="flex mt-[90px] flex-col items-center w-full px-4 py-6 space-y-6">
      <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden">
        <Skeleton className="w-full h-full rounded-xl" />
      </div>

      <div className="w-full max-w-5xl space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <div className="flex gap-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>

      <div className="w-full max-w-5xl space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
      </div>

      <div className="w-full max-w-5xl flex flex-wrap gap-3 mt-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-24 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoad;
