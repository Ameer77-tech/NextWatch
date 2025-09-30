import React from "react";
import Heading from "./SSR/Popular/Heading";
import Container from "./CSR/Popular/Container";

const Popular = () => {
  return (
    <div className="mt-7 p-5 md:p-16 relative">
      <Heading />
      <Container />
    </div>
  );
};

export default Popular;
