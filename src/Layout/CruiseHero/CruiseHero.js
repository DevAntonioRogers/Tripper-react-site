import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './CruiseHero.module.css';

import firstSlide from '../../assets/cruise1.jpg'
import secondSlide from '../../assets/slide2.jpg'

const CruiseHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <Slider className={classes.slider} {...settings}>
      <div className={classes.firstSlide}>
        <img src={firstSlide} alt='Cruise Ship' />
        <div className={classes.firstSlide_info_contianer}>
          <div>
            <h1>Cruise of the Year!</h1>
            <span>The Norwedian Gem by Norwedian Cruiselines</span>
          </div>
          <div>
            <button>Book Now</button>
            <button>More Info</button>
          </div>
        </div>
      </div>
      <div className={classes.secondSlide}>
        <img src={secondSlide} alt='Family' />
        <div className={classes.secondSlide_info_contianer}>
          <div>
            <h1>FAMILY FUN</h1>
            <span>Book a cruise for the family!</span>
          </div>
          <div>
            <button>Book Now</button>
          </div>
        </div>
      </div>

    </Slider>

  );
};

export default CruiseHero;
