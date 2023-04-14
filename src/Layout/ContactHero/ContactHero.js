import './ContactHero.css'
import Map from '../../components/Map/Map';
import SocialBox from '../../components/ContactPageComponents/SocialBox/SocialBox';
import ContactForm from '../../components/ContactPageComponents/ContactForm/ContactForm';

import { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion';

import { contactFormAnimations } from '../../shared/Animations';
import { contactBoxesAnimations } from '../../shared/Animations';


const ContactHero = () => {



  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const formAnimationControls = useAnimation()
  const boxesAnimationControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      formAnimationControls.start('enter')
      boxesAnimationControls.start('enter')
    }
    if (!isInView) {
      formAnimationControls.start('exit')
      boxesAnimationControls.start('exit')
    }
  }, [isInView])
  return (
    <div ref={ref} className='contact-hero-container'>
      <div className='contact-hero-inner'>
        <motion.div animate={boxesAnimationControls} variants={contactBoxesAnimations} className='social'>
          <SocialBox />
        </motion.div>
        <motion.div animate={boxesAnimationControls} variants={contactBoxesAnimations} className='map'>
          <Map />
        </motion.div>
        <motion.div animate={formAnimationControls} variants={contactFormAnimations} className='form'>
          <h1>Send us a message</h1>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  )
};

export default ContactHero;
