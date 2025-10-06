import { fetchShow } from "@/app/lib/fetchers/movie";
import React from "react";
import BgImage from "./components/bg-image";
import Hero from "./components/Hero";
import Embed from "./components/Embed";
import MovieInitializer from "./components/MovieInitializer";
import Similar from "./components/Similar";

const page = async ({ params }) => {
  const parametres = await params;
  const type = parametres.type;
  const id = parametres.slug;
  const response = await fetchShow(type, id);
  console.log(response);

  return (
    <>
      <MovieInitializer data={response} />
      <div className="relative">
        <BgImage path={response?.details?.backdrop_path} />
        <div className="md:mt-15 mt-[80px] z-50 relative">
          <Embed
            video={response.videos}
            title={
              response.details?.title ||
              response.details?.original_title ||
              response.details?.name
            }
          />
          <Hero />
          <Similar data={response?.similar?.results} type={type} />
        </div>
      </div>
    </>
  );
};

export default page;
