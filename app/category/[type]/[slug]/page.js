import { fetchShow } from "@/app/lib/fetchers/movie";
import React from "react";
import BgImage from "./components/bg-image";
import Hero from "./components/Hero";

const page = async ({ params }) => {
  const parametres = await params;
  const type = parametres.type;
  const id = parametres.slug;
  const response = await fetchShow(type, id);

  return (
    <div className="relative">
      <BgImage path={response.backdrop_path} />
      <Hero
        poster={response.poster_path}
        title={response?.title || response?.original_title || response?.name}
        tagline={response.tagline}
        genres={response.genres}
        release={response.release_date}
        rating={response.popularity}
      />
    </div>
  );
};

export default page;
