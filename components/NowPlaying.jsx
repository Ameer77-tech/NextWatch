import React from "react";
import Heading from "./SSR/NowPlaying/Heading";
import Container from "./CSR/NowPlaying/Container";
import Arrows from "./Arrows";

const NowPlaying = () => {
  return (
    <div className="p-5 md:p-10 relative">
      <Heading />
      <Container />
      <Arrows />
    </div>
  );
};

export default NowPlaying;
