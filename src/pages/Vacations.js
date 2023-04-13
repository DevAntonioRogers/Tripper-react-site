import VacationsHero from "../Layout/VacationsHero/VacationsHero";
import VacationsCards from "../Layout/VacationsCards/VacationsCards";
import VacationType from "../components/VacationPageComponents/VacationTypes/VacationsType";
import VacationsBottom from "../components/VacationPageComponents/VacationsBottom/VacationsBottom";
import Footer from '../components/Footer/Footer'







function Vacations() {
  return (
    <>
      <VacationsHero />
      <VacationsCards />
      <VacationType />
      <VacationsCards />
      <VacationsBottom />
      <Footer />
    </>
  )
}

export default Vacations;
