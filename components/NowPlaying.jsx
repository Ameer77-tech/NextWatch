import React from "react";
import Heading from "./SSR/Heading";
import Container from "./CSR/NowPlaying/Container";


const NowPlaying = () => {

  return (
    <div className="p-5 md:p-16 relative">
      <Heading name="NEW RELEASES"/>
      <Container />
    </div>
  );
};

export default NowPlaying;
