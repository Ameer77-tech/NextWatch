import React from "react";
import { genres } from "@/app/lib/genres";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const GenreCard = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-5 md:p-16 p-4">
      {genres.map((genre, idx) => (
        <Card
          key={idx}
          className="md:w-full w-full hover:-translate-y-2 active:-translate-y-2 select-none transition-transform ease cursor-grab"
        >
          <CardTitle className="text-sm md:text-lg font-semibold text-center">
            {genre}
          </CardTitle>
        </Card>
      ))}
    </div>
  );
};

export default GenreCard;
