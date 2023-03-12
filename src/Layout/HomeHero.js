import Hero from '../components/Hero/Hero';
import classes from './HomeHero.module.css'
import HomeHeroImg from '../../src/assets/homehero.jpg'

import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const HomeHero = () => {
  return (
    <Hero>
      <div>
        <img className={classes.hero__image} alt="home hero" src={HomeHeroImg} />
      </div>

      <div className={classes.hero_text_container}>
        <h1>Travel Beyond Limits</h1>

        <div className={classes.hero_button_container}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/'>Explore Places</Link></motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/'>Explore Cruises</Link>
          </motion.button>
        </div>
      </div>
    </Hero>
  )
};

export default HomeHero;
