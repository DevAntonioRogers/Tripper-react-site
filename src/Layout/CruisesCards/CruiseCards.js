import { FeaturedData } from '../../components/HomeComponents/FeaturedDestinations/FeaturedData'
import Card from "../../UI/Card/Card";
import CardItem from "../../UI/Card/CardItem";
import classes from './CruisesCards.module.css'
import { FaStar, FaSwimmingPool, FaHandSparkles, FaGamepad } from "react-icons/fa";
import { MdFastfood, MdSmokingRooms } from 'react-icons/md'




const CruiseCards = (props) => {



  const cruises =
    FeaturedData.map((cruise) =>
      <Card>
        <CardItem name={cruise.name} image={cruise.image} location={cruise.location} stayAmount={cruise.stayAmount} price={cruise.price} details={cruise.details} rating={[...Array(5)].map((star, index) => {
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
      </Card >)






  return (
    <div className={classes.card_container}>
      {cruises}
    </div>

  )
}

export default CruiseCards;

