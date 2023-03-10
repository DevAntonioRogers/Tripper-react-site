import officeImg from '../../../src/assets/office.png'
import './AboutUs.css'

const Aboutus = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-img'>
          <img src={officeImg} alt='About' />
        </div>

        <div className='about-text-container'>
          <h1>About Us</h1>
          <p>At Tripper, we believe that travel is more than just visiting new places; it's about immersing yourself in new cultures, trying new foods, meeting new people, and creating lifelong memories. Our team of experienced travel advisors is dedicated to crafting personalized itineraries that cater to your unique travel style and preferences.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
