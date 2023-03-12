import classes from './Hero.module.css'

const Hero = (props) => {
  return (
    <div className={classes.hero__container}>{props.children}</div>
  )
};

export default Hero;
