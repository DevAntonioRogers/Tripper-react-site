import Footer from "../components/Footer/Footer";
import DestinationList from "../components/DestinationComponents/DestinationGrid/DestinationList";
import DestinationsBottom from "../components/DestinationComponents/DestinationsBottom/DestinationsBottom";
import DestinationsHero from "../Layout/DestinationsHero/DestinationHero";

function Destinations() {
  return (
    <>
      <DestinationsHero />
      <DestinationList />
      <DestinationsBottom />
      <Footer />
    </>
  )
}

export default Destinations;
