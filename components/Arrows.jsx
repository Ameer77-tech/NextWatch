import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const Arrows = () => {
  return (
    <div className="arrows absolute bottom-0 flex justify-evenly w-full">
      <div className="flex items-center">
        <ArrowLeft size={20} color="red" />
        <Button variant="link" className="md:-ml-3">
          previous
        </Button>
      </div>
      <div className="flex items-center">
        <Button variant="link" className="md:-mr-3">
          Next
        </Button>
        <ArrowRight size={20} color="red" />
      </div>
    </div>
  );
};

export default Arrows;
