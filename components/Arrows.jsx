import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ActiveSlide from "./CSR/ActiveSlide";
const Arrows = ({
  handleNext,
  handlePrev,
  from,
  length,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="arrows hidden absolute bottom-0 left-0 md:px-10 md:flex justify-between items-center md:w-full">
      <div className="flex items-center">
        <ArrowLeft size={20} color="red" />
        <span onClick={handlePrev}>
          <Button variant="link" className="md:-ml-3">
            previous
          </Button>
        </span>
      </div>
      {from !== undefined && (
        <div>
          <ActiveSlide
            length={length}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      )}

      <div className="flex items-center">
        <span onClick={handleNext}>
          <Button variant="link" className="md:-mr-3">
            Next
          </Button>
        </span>
        <ArrowRight size={20} color="red" />
      </div>
    </div>
  );
};

export default Arrows;
