import clsx from "clsx";
import React from "react";

const ActiveSlide = ({ length, activeIndex, setActiveIndex }) => {
  const numSlides = Math.ceil(length / 5);
  return (
    <div className="flex gap-4">
      {Array.from({ length: numSlides }).map((_, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          key={index}
          className={clsx(
            "hidden md:block md:w-4 md:h-4 rounded-full hover:scale-150 hover:bg-accent/70 transition-all ease cursor-grabbing",
            activeIndex === index ? "bg-primary scale-125" : "bg-popover"
          )}
        ></div>
      ))}
    </div>
  );
};

export default ActiveSlide;
