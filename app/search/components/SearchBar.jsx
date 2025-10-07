"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setsearchTerm] = useState("");
  const inputRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-background border border-border rounded-lg shadow-sm px-3 py-2 flex items-center gap-2">
        <span className="text-muted-foreground">
          <Search className="w-5 h-5" />
        </span>

        <Input
          ref={inputRef}
          onChange={(e) => setsearchTerm(e.target.value)}
          value={searchTerm}
          aria-label="Search"
          placeholder="Search movies or series"
          className="bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground px-5"
        />

        <div className="flex items-center gap-2">
          <Button
            onClick={() => {
              setsearchTerm("");
              inputRef.current.focus();
            }}
            variant="secondary"
            className="p-1"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </Button>

          <Button
            variant={`${searchTerm == "" ? "secondary" : "destructive"}`}
            className="px-4 py-1 cursor-pointer"
            onClick={(e) => handleSearch(e)}
            disabled={searchTerm == "" ? true : false}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
