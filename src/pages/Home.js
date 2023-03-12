import BottomHero from "../components/HomeComponents/BottomHero/BottomHero";
import FeaturedList from "../components/HomeComponents/FeaturedDestinations/FeaturedList";
import Parallex from "../components/HomeComponents/Parallax Image/Parallex";
import AppSection from "../components/HomeComponents/AppSection/AppSection";
import Footer from "../components/Footer/Footer";
import HomeHero from "../Layout/HomeHero/HomeHero";


function Home() {
  return (
    <>
      <HomeHero />
      <BottomHero />
      <FeaturedList />
      <Parallex />
      <AppSection />
      <Footer />
    </>
  )
}

export default Home;
