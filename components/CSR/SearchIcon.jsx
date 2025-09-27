import React from "react";
import { Search } from "lucide-react";
const SearchIcon = () => {
  return (
    <div className="bg-secondary p-3 rounded-full flex gap-1 items-center">
      <span className="text-white">Search</span><Search color="white" />
    </div>
  );
};

export default SearchIcon;
