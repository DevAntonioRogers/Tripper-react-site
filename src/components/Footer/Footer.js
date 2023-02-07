import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className='footer-logo-box'>
          <Link to='/' className="logo footer-logo">
            <i class="fa-solid fa-location-dot"></i>
            Tripper
          </Link>
          <p>Tripper is the leading website for booking vacations and i have no idea what goes here Tripper is the leading website for booking vacations and i have no idea what goes here</p>
        </div>

        <div className='footer-contact-box'>
          <h3>Contact Information</h3>
          <div className='footer-contact-inner'>
            <div className='footer-address'>
              <i class="fa-solid fa-building"></i>
              <p>1800 Location Drive Los Angeles, California 13525</p>
            </div>
            <div className='footer-phone'>
              <i class="fa-solid fa-phone"></i>
              <p>1800-573-2748</p>
            </div>
            <div className='footer-hours'>
              <i class="fa-solid fa-calendar-days"></i>
              <p>Available Mon-Fri 7am-5pm</p>
            </div>
          </div>
        </div>

        <div className='footer-link-box'>
          <h3>Quick Links</h3>
          <Link to='/'>Home</Link>
          <Link to='destinations'>Destinations</Link>
          <Link to='cruises'>Cruises</Link>
          <Link to='about'>About</Link>
          <Link to='contact'>Contact</Link>
        </div>

        <div className='footer-social-box'>

          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className='bottom-footer'>
        <span>Copyright © 2023 Tripper Travel Agency</span>
      </div>

    </>


  )
}



export default Footer