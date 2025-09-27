import React from "react";
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className={`text-md font-semibold ${JetBrainsMono.className}`}>
        New Releases
      </h1>
      <div className="flex items-center">
        <Button variant="link">See All</Button>
        <ArrowRight size={15} className="-ml-3 text-accent" />
      </div>
    </div>
  );
};

export default Heading;
