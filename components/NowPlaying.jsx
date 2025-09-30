import React from "react";
import Heading from "./SSR/NowPlaying/Heading";
import Container from "./CSR/NowPlaying/Container";


const NowPlaying = () => {

  return (
    <div className="p-5 md:p-16 relative">
      <Heading />
      <Container />
    </div>
  );
};

export default NowPlaying;
