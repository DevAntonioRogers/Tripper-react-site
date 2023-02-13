import Hero from "../components/Hero/Hero";
import DestinationsHeroImg from '../assets/image2.jpg'
import '../components/Hero/destinationsHero.css'
import Footer from "../components/Footer/Footer";
import DestinationList from "../components/DestinationComponents/DestinationGrid/DestinationList";

function Destinations() {
  const heroHeading = 'SAVE 60% BY BOOKING WITH US'

  const primaryBtnTitle = 'Start Saving'
  return (
    <>
      <Hero
        heroImage={DestinationsHeroImg}
        textClass='destinations-text-container'
        title={heroHeading}
        primaryBtnTitle={primaryBtnTitle}
        btnClass='destination-hero-btn'
        primaryBtnUrl='/'
        secondaryBtnUrl='/'
      />

      <DestinationList />
      <Footer />
    </>
  )
}

export default Destinations;
