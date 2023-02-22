import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Hero(props) {
  return (
    <div className={props.container}>
      <div className={props.className}>
        <img className='hero' alt="hero" src={props.heroImage} />
      </div>

      <div className={props.textClass}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <div className={props.btnClass}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={props.primaryBtnUrl}>{props.primaryBtnTitle}</Link></motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={props.secondaryBtnUrl}>{props.secondaryBtnTitle}</Link>
          </motion.button>
        </div>
      </div>


    </div>
  );
}

export default Hero;
