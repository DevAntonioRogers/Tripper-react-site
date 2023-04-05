import classes from './VacationsCards.module.css'


// Temporary
import CruiseCards from '../CruisesCards/CruiseCards';

const VacationsCards = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>TOP RATED VACATIONS</h1>
      </div>

      <CruiseCards firstCards={4} />
    </div>

  )
};

export default VacationsCards;
