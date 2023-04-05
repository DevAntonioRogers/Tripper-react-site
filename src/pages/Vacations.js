import VacationsHero from "../Layout/VacationsHero/VacationsHero";
import VacationsCards from "../Layout/VacationsCards/VacationsCards";
import VacationType from "../components/VacationPageComponents/VacationTypes/VacationsType";
import VacationsBottom from "../components/VacationPageComponents/VacationsBottom/VacationsBottom";
import Footer from '../components/Footer/Footer'



// Temporary
import CruiseCards from "../Layout/CruisesCards/CruiseCards";



function Vacations() {
  return (
    <>
      <VacationsHero />
      <VacationsCards />
      <VacationType />
      <CruiseCards firstCards={4} />
      <CruiseCards firstCards={4} />
      <CruiseCards firstCards={4} />
      <VacationsBottom />
      <Footer />
    </>
  )
}

export default Vacations;
