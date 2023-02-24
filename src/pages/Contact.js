import '../components/Hero/ContactHero.css'

function Contact() {
  return (
    <>
      <div className='contact-hero-container'>

        <div className='contact-hero-inner'>
          <div className='social'>
            <h3>Contact Info</h3>
            <div className='contact-social-info'>
              <i class="fa-solid fa-phone"></i>
              <span>1800-435-2343</span>
            </div>
            <div className='contact-social-info'>
              <i class="fa-solid fa-envelope-open"></i>
              <span>contact@tripper.com</span>
            </div>
            <div className='contact-social-info'>
              <i class="fa-solid fa-building"></i>
              <span>1343 AntonioRogers Rd</span>
            </div>
            <div className='contact-social-box'>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-snapchat"></i>
            </div>
          </div>

          <div className='map'>
            <h1>MAP</h1>
          </div>


          <div className='form'>
            <h1>FORM</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
