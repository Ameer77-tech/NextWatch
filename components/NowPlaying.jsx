import React from "react";
import Heading from "./SSR/NowPlaying/Heading";
import Container from "./CSR/NowPlaying/Container";

const NowPlaying = () => {
  return (
    <div className="p-5">
      <Heading />
      <Container />
    </div>
  );
};

export default NowPlaying;
