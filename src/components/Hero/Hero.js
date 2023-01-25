import './Hero.css'
import { Link } from 'react-router-dom'

function Hero(props) {
  return (
    <>
      <div className={props.class}>
        <img className={props.imgClass} alt="hero" src={props.heroImage} />
      </div>

      <div className={props.textClass}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <div className={props.btnClass}>
          <Link to={props.btnUrl}>{props.btnTitle}</Link>
        </div>
      </div>


    </>
  );
}

export default Hero;
