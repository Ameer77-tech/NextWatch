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
            "hidden md:block md:w-3 md:h-3 rounded-full hover:scale-150",
            activeIndex === index ? "bg-primary scale-125" : "bg-popover"
          )}
        ></div>
      ))}
    </div>
  );
};

export default ActiveSlide;
