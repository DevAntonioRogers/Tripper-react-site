import classes from './CruisePartners.module.css'

import Logo1 from '../../../assets/norwegianlogo.png'
import Logo2 from '../../../assets/royallogo.png'

const CruisePartners = () => {
  return (
    <div className={classes.partners}>
      <h1>Cruise Partners</h1>
      <div className={classes.cruise_logos}>
        <img src={Logo1} alt='Norwegian logo' />
        <img src={Logo2} alt='Norwegian logo' />
        <img src={Logo1} alt='Norwegian logo' />
        <img src={Logo1} alt='Norwegian logo' />
        <img src={Logo1} alt='Norwegian logo' />
      </div>
    </div>
  )
};

export default CruisePartners;
