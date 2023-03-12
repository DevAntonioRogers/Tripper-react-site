import './ContactHero.css'
import Map from '../../components/Map/Map';
import SocialBox from '../../components/ContactPageComponents/SocialBox/SocialBox';
import ContactForm from '../../components/ContactPageComponents/ContactForm/ContactForm';

const ContactHero = () => {
  return (
    <div className='contact-hero-container'>
      <div className='contact-hero-inner'>
        <div className='social'>
          <SocialBox />
        </div>
        <div className='map'>
          <Map />
        </div>
        <div className='form'>
          <h1>Send us a message</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
};

export default ContactHero;
