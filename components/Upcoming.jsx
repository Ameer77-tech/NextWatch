import React from "react";
import Heading from "./SSR/upcoming/Heading";
import Container from "./CSR/Upcoming/Container";

const Upcoming = () => {
  return (
    <div className="mt-7 p-5 md:p-10">
      <Heading />
      <Container />
    </div>
  );
};

export default Upcoming;
