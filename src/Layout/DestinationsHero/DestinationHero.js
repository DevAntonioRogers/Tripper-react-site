import Hero from '../../components/Hero/Hero';
import classes from './DestinationsHero.module.css'
import DestinationsHeroImg from '../../../src/assets/image2.jpg'

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DestinationsHero = () => {
  return (
    <Hero>
      <div>
        <img className={classes.hero__image} alt="home hero" src={DestinationsHeroImg} />
      </div>
      <div className={classes.hero_text_container}>
        <h1>SAVE 60% BY BOOKING WITH US</h1>
        <div className={classes.hero_button_container}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/'>Start Saving!</Link></motion.button>
        </div>
      </div>
    </Hero>
  )
};

export default DestinationsHero;