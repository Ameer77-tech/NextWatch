import clsx from "clsx";
import React from "react";

const ActiveSlide = ({ length, activeIndex }) => {
  const numSlides = Math.ceil(length / 5);
  return (
    <div className="flex gap-2">
      {Array.from({ length: numSlides }).map((_, index) => (
        <div
          key={index}
          className={clsx(
            "hidden md:block md:w-3 md:h-3 rounded-full",
            activeIndex === index ? "bg-primary" : "bg-popover"
          )}
        ></div>
      ))}
    </div>
  );
};

export default ActiveSlide;
