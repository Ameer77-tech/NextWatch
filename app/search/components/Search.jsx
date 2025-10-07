import React from "react";
import Back from "./Back";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="md:w-4/5 w-full md:h-auto flex items-center md:p-5 ">
      <Back />
      <SearchBar />
    </div>
  );
};

export default Search;
