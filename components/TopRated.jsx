import Heading from "./SSR/Heading";
import Container from "./CSR/TopRated/Container";

const TopRated = () => {
  
  return (
    <div className="mt-7 p-5 md:p-16 relative">
      <Heading name="TOP RATED"/>
      <Container />
    </div>
  );
};

export default TopRated;
