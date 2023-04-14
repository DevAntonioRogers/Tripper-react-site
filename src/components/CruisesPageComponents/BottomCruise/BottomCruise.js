import classes from './BottomCruise.module.css'
import image from '../../../assets/bottomcruise.png'

import { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion';

import { bottomCruiseAnimations } from '../../../shared/Animations';

const BottomCruise = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const imageControls = useAnimation()
  const textControls = useAnimation()


  useEffect(() => {
    if (isInView) {
      imageControls.start('enter')
      textControls.start('enter')

    }
    if (!isInView) {
      imageControls.start('imageExit')
      textControls.start('aboutExit')
    }
  }, [isInView])
  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.inner}>
        <motion.div animate={textControls} variants={bottomCruiseAnimations}>
          <h1>Anything for now</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </motion.div>

        <motion.div animate={imageControls} variants={bottomCruiseAnimations}>
          <img src={image} alt='' />
        </motion.div>
      </div>
    </div>
  )
};

export default BottomCruise;
