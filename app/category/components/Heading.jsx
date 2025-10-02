import { JetBrainsMono } from "@/public/fonts/JetBrains";
import React from "react";

const Heading = ({ name }) => {
  return (
    <div>
      <p
        className={`${JetBrainsMono.className} text-2xl shadow-2xl shadow-primary font-semibold bg-gradient-to-b from-primary to-95% to-secondary-foreground/80 bg-clip-text text-transparent`}
      >
        {name}
      </p>
    </div>
  );
};

export default Heading;
