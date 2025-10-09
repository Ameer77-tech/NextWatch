import React from "react";
import Search from "./components/Search";
import { SearchShow } from "../lib/fetchers/searchTerm";
import Container from "./components/Container";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const searchTerm = params.q;
  const response = await SearchShow(searchTerm);
  console.log(response);
  
  return (
    <div className="md:mt-15 mt-[90px] md:p-20 flex flex-col items-center">
      <Search />
      <Container results={response?.results.results} />
    </div>
  );
};

export default page;
