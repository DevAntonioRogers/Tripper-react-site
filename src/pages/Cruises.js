import cruiseHero from '../../src/assets/cruisehero.jpg'
import Hero from '../components/Hero/Hero';
import CruiseCards from '../Layout/CruisesCards/CruiseCards';



function Cruises() {

  return (
    <>
      <Hero
        heroImage={cruiseHero}
      />

      <CruiseCards />

    </>
  );
}



export default Cruises;
