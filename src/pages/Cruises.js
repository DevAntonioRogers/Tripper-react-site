import cruiseHero from '../../src/assets/cruisehero.jpg'
import Hero from '../components/Hero/Hero';
import CruiseCards from '../Layout/CruisesCards/CruiseCards';
import Cruisehero from '../Layout/CruiseHero/CruiseHero'
import CruisePartners from '../components/CruisesPageComponents/CruisePartners/CruisePartners';
import BottomCruise from '../components/CruisesPageComponents/BottomCruise/BottomCruise';
import Footer from '../components/Footer/Footer'



function Cruises() {

  return (
    <>
      <Cruisehero />
      <CruiseCards firstCards={4} />
      <CruisePartners />
      <CruiseCards lastCards={4} />
      <BottomCruise />
      <Footer />
    </>
  );
}



export default Cruises;
