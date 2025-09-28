import Container from "./CSR/TvSeries/Container";
import Heading from "./SSR/TvSeries/Heading";

const TvSeries = () => {
  return (
    <div className="mt-7 p-5 md:p-20">
      <Heading />
      <Container />
    </div>
  );
};

export default TvSeries;
