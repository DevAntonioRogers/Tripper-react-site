import './AppSection.css'
import AppPicture from '../../../assets/appsection.png'
import AppleBadge from '../../../assets/applestorebadge.svg'
import GoogleBadge from '../../../assets/googleplaybadge.svg'

import Newsletter from '../Newsletter/Newsletter'

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


const AppSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 1, bounce: 0.2 }
      })
    }
    if (!isInView) {
      animation.start({
        x: '-100vw',
        opacity: 0
      })
    }
  })
  return (
    <motion.div animate={animation} ref={ref} className='app-section-container'>
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
    </motion.div>
  )
}

export default AppSection