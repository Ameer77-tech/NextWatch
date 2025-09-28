import React from "react";
import Heading from "./SSR/Popular/Heading";
import Container from "./CSR/Popular/Container";

const Popular = () => {
  return (
    <div className="mt-7 p-5 md:p-20">
      <Heading />
      <Container />
    </div>
  );
};

export default Popular;
