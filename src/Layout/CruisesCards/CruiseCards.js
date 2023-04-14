import { CruiseCardData } from "./CruiseCardData";
import Card from "../../UI/Card/Card";
import CardItem from "../../UI/Card/CardItem";
import classes from './CruisesCards.module.css'
import { FaStar, FaSwimmingPool, FaHandSparkles, FaGamepad } from "react-icons/fa";
import { MdFastfood, MdSmokingRooms } from 'react-icons/md'
import { Link } from "react-router-dom";

import { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion';

import { cruiseTopCardAnimations } from '../../shared/Animations';
import { cruiseBottomCardAnimations } from "../../shared/Animations";





const CruiseCards = (props) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const topCardControls = useAnimation()
  const bottomCardControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      topCardControls.start('enter')
      bottomCardControls.start('enter')
    }
    if (!isInView) {
      topCardControls.start('exit')
      bottomCardControls.start('exit')

    }
  }, [isInView])

  const cruises =
    CruiseCardData.map((cruise) =>
      <Link to={`/cruise/${cruise.name.replace(/\s/g, '')}`}>

        <Card>
          <CardItem name={cruise.name} image={cruise.image} depart={'Depart: '} location={cruise.depart} stayAmount={cruise.stayAmount} price={cruise.price} details={cruise.details} rating={[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
            return (
              <FaStar
                color={
                  ratingValue > cruise.rating
                    ? 'grey'
                    : '#e63946'
                }
              />
            )
          })}
            tags={
              <>
                <FaSwimmingPool
                  color={
                    cruise.pool === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <FaHandSparkles
                  color={
                    cruise.spa === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <FaGamepad
                  color={
                    cruise.arcade === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <MdFastfood
                  color={
                    cruise.roomService === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <MdSmokingRooms
                  color={
                    cruise.smokingRooms === true ?
                      '#e63946' :
                      'grey'
                  } />
              </>

            }


          />
        </Card >
      </Link>
    )






  return (
    <div ref={ref}>
      <motion.div animate={topCardControls} variants={cruiseTopCardAnimations} className={classes.card_container}>
        {cruises.splice(0, props.firstCards)}
      </motion.div>

      <motion.div animate={bottomCardControls} variants={cruiseBottomCardAnimations} className={classes.card_container}>
        {cruises.splice(4, props.lastCards)}
      </motion.div>

    </div>


  )
}

export default CruiseCards;

