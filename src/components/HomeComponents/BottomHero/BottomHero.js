import './BottomHero.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';




const BottomHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        transition: { duration: 0.5 }
      })
    }
    if (!isInView) {
      animation.start({
        y: '-100%'
      })
    }
  })

  return (
    <div ref={ref}>
      <div
        className='bottom-hero--container'>
        <motion.div animate={animation} className='bottom-hero--inner'>
          <i class="fa-solid fa-suitcase-rolling"></i>
          <div className='bottom-hero--text'>
            <p>First-Hand Experience</p>
            <p>Thousands of trips & reviews</p>
          </div>
        </motion.div>
        <motion.div animate={animation} className='bottom-hero--inner'>
          <i className="fa-solid fa-piggy-bank"></i>
          <div className='bottom-hero--text'>
            <p>Bundle Tickets + Hotel.</p>
            <p>Save over 60%</p>
          </div>
        </motion.div>
        <motion.div animate={animation} className='bottom-hero--inner'>
          <i className="fa-solid fa-bolt-lightning"></i>
          <div className='bottom-hero--text'>
            <p>Fast Response Times</p>
            <p>Best Customer Service</p>
          </div>
        </motion.div>
        <motion.div animate={animation} className='bottom-hero--inner'>
          <i class="fa-solid fa-plane"></i>
          <div className='bottom-hero--text'>
            <p>Flights Included</p>
            <p>All Inclusive Packages</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BottomHero;
