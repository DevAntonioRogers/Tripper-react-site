import officeImg from '../../../../src/assets/office.png'
import './AboutUs.css'
import { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion';

import { aboutSectionAnimations } from '../../../shared/Animations';


const Aboutus = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const imageControls = useAnimation()
  const aboutControls = useAnimation()


  useEffect(() => {
    if (isInView) {
      imageControls.start('enter')
      aboutControls.start('enter')

    }
    if (!isInView) {
      imageControls.start('imageExit')
      aboutControls.start('aboutExit')
    }
  })
  return (
    <>
      <div ref={ref} className='about-container'>
        <motion.div variants={aboutSectionAnimations} animate={imageControls} className='about-img'>
          <img src={officeImg} alt='About' />
        </motion.div>

        <motion.div variants={aboutSectionAnimations} animate={aboutControls} className='about-text-container'>
          <h1>About Us</h1>
          <p>At Tripper, we believe that travel is more than just visiting new places; it's about immersing yourself in new cultures, trying new foods, meeting new people, and creating lifelong memories. Our team of experienced travel advisors is dedicated to crafting personalized itineraries that cater to your unique travel style and preferences.
          </p>
          <button>Contact Us</button>
        </motion.div>
      </div>
    </>
  );
};

export default Aboutus;
