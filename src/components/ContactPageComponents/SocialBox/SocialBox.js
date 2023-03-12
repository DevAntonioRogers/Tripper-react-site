import './SocialBox.css'

const SocialBox = () => {
  return (
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
  )
};

export default SocialBox;
