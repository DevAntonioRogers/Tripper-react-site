import './AppSection.css'
import AppPicture from '../../../assets/appsection.png'
import AppleBadge from '../../../assets/applestorebadge.svg'
import GoogleBadge from '../../../assets/googleplaybadge.svg'

import Newsletter from '../../Newsletter/Newsletter'


const AppSection = () => {
  return (
    <div className='app-section-container'>
      <div className="app-details-container">
        <img src={AppPicture} alt="AppPicture" />

        <div className="app-section-inner">
          <div>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <h3>Take Tripper Everywhere</h3>
          <p>Download our App and you will have access to places to stay, more things to do, and much more,everywhere you go with one-click booking.</p>

          <div className='app-badges-container'>
            <img src={AppleBadge} alt='AppleStore' />
            <img src={GoogleBadge} alt='GoogleStore' />
          </div>
        </div>


      </div>
      <Newsletter />
    </div>
  )
}

export default AppSection