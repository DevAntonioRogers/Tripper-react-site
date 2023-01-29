import './homeHero.css'
import { Link } from 'react-router-dom'

function Hero(props) {
  return (
    <>
      <div className={props.className}>
        <img className='hero' alt="hero" src={props.heroImage} />
      </div>

      <div className={props.textClass}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <div className={props.btnClass}>
          <Link to={props.primaryBtnUrl}>{props.primaryBtnTitle}</Link>
          <Link to={props.secondaryBtnUrl}>{props.secondaryBtnTitle}</Link>
        </div>
      </div>


    </>
  );
}

export default Hero;
