import '../components/Hero/ContactHero.css'
import Footer from '../components/Footer/Footer'
import Map from '../components/Map/Map';
import MeetTheTeam from '../components/ContactPageComponents/MeetTheTeam';

function Contact() {
  return (
    <>
      <div className='contact-hero-container'>
        <div className='contact-hero-inner'>
          <div className='social'>
            <div className='social-box'>
              <h3>Contact Us or Send us a message</h3>
              <div className='contact-social-info'>
                <i class="fa-solid fa-phone"></i>
                <span>1800-435-2343</span>
              </div>
              <div className='contact-social-info'>
                <i class="fa-solid fa-envelope-open"></i>
                <span>contact@tripper.com</span>
              </div>
              <div className='contact-social-info'>
                <i class="fa-solid fa-house"></i>
                <span>1343 AntonioRogers Rd</span>
              </div>
              <div className='contact-social-box'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className='map'>
            <Map />
          </div>
          <div className='form'>
            <form>
              <div>
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" placeholder='Enter your first name' required />
              </div>

              <div>
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" placeholder='Enter your last name' required />
              </div>

              <div>
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder='Enter your email address' required />
              </div>
              <div>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder='Enter a phone number' required />
              </div>

              <div className='form-text-area'>
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" rows="7"></textarea>
                <button>Submit</button>
              </div>
              <div className='form-hours'>
                <h3>HOURS OF OPERATION</h3>
                <div>
                  <p className='light'>MONDAY: 5AM - 5PM</p>
                  <p>TUESDAY: 5AM - 5PM</p>
                  <p className='light'>WEDNESDAY: CLOSED</p>
                  <p>THURSDAY: CLOSED</p>
                  <p className='light'>FRIDAY: 5AM - 3PM</p>
                  <p>SAT & SUN: 5AM - 3PM</p>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
      <MeetTheTeam />
      <Footer />
    </>
  )
}

export default Contact;
