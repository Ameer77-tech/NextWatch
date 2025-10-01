import Container from "./CSR/TvSeries/Container";
import Heading from "./SSR/Heading";
const TvSeries = () => {
  return (
    <div className="mt-7 p-5 md:p-16 relative">
      <Heading name="TV SERIES"/>
      <Container />
    </div>
  );
};

export default TvSeries;
