import { fetchShow } from "@/app/lib/fetchers/movie";
import React from "react";
import BgImage from "./components/bg-image";
import Hero from "./components/Hero";
import Embed from "./components/Embed";
import MovieInitializer from "./components/MovieInitializer";
import Similar from "./components/Similar";
import SkeletonLoad from "./components/SkeletonLoad";
import Footer from "@/components/Footer";

const Page = async ({ params }) => {
  const resolvedParams = await params;
  const type = resolvedParams.type;
  const id = resolvedParams.slug;
  let response = null;

  try {
    response = await fetchShow(type, id);
  } catch (err) {
    console.error("fetchShow failed:", err);
  }

  if (!response) {
    return <SkeletonLoad />;
  }

  const title =
    response.details?.title ||
    response.details?.original_title ||
    response.details?.name;

  return (
    <>
      <MovieInitializer data={response} />
      <div className="relative">
        <BgImage path={response.details?.backdrop_path} />
        <div className="md:mt-15 mt-[80px] z-50 relative">
          <Embed video={response.videos} title={title} />
          <Hero />
          <Similar data={response.similar?.results} type={type} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
