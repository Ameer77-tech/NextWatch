import React from "react";
import SkeletonLoad from "../category/components/Skeleton";

const Loading = () => {
  return (
    <div
      className="md:mt-15 z-100 mt-[90px] md:min-h-[calc(100vh-60px)] min-h-[calc(100vh-90px)]
      flex flex-col items-center py-10 md:py-15 space-y-10"
    >
      <SkeletonLoad />
    </div>
  );
};

export default Loading;
