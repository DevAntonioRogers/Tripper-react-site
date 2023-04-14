import { VacationCardData } from "./VacationCardData";
import Card from "../../UI/Card/Card";
import CardItem from "../../UI/Card/CardItem";
import classes from './VacationsCards.module.css'
import { Link } from "react-router-dom";


import { BsAirplaneFill, BsBusFrontFill } from 'react-icons/bs'
import { FaBed, FaStar } from 'react-icons/fa'
import { MdAllInclusive } from 'react-icons/md'
import { BiDrink } from 'react-icons/bi'




const VacationCards = (props) => {



  const Vacations =
    VacationCardData.map((vacation) =>

      <Link to={`/vacations/${vacation.name.replace(/\s/g, '')}`}>
        <Card>
          <CardItem name={vacation.name} image={vacation.image} location={vacation.depart} stayAmount={vacation.stayAmount} price={vacation.price} details={vacation.details} rating={[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
            return (
              <FaStar
                color={
                  ratingValue > vacation.rating
                    ? 'grey'
                    : '#e63946'
                }
              />
            )
          })}
            tags={
              <>
                <BsAirplaneFill
                  color={
                    vacation.airefare === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <BsBusFrontFill
                  color={
                    vacation.transfer === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <FaBed
                  color={
                    vacation.hotel === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <MdAllInclusive
                  color={
                    vacation.allInvlusive === true ?
                      '#e63946' :
                      'grey'
                  }
                />
                <BiDrink
                  color={
                    vacation.adultsOnly === true ?
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
    <div className={classes.card_container}>
      {Vacations}
    </div>
  )
}

export default VacationCards;

