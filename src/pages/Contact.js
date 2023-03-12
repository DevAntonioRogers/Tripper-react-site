import Footer from '../components/Footer/Footer'
import MeetTheTeam from '../components/ContactPageComponents/MeetTheTeam/MeetTheTeam';
import Aboutus from '../components/ContactPageComponents/AboutUs/Aboutus'
import ContactHero from '../Layout/ContactHero/ContactHero';


function Contact() {
  return (
    <>
      <ContactHero />
      <MeetTheTeam />
      <Aboutus />
      <Footer />
    </>
  )
}

export default Contact;
