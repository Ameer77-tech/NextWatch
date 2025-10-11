import { fetchMovies } from "@/app/lib/fetchers/movies";
import React, { Suspense } from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";
import Spinner from "@/components/Spinner";

const page = async ({ params, searchParams }) => {
  const sParams = await searchParams;
  const param = await params;
  const type = param.type;
  const page = parseInt(sParams.page);
  if (!page) {
    return <NotFound />;
  }
  const response = await fetchMovies(type, page);
  const results = response.results.sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div
          className="md:mt-15 mt-[90px] md:min-h-[calc(100vh-60px)] min-h-[calc(100vh-90px)]
    flex flex-col items-center py-10 md:py-15 space-y-10
    "
        >
          <Heading name={type.toUpperCase()} />
          <Container results={results} type={type} />
          <Navigation page={page} type={type} />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default page;
