import classes from './CruisePartners.module.css'

import Logo1 from '../../../assets/norwegianlogo.png'
import Logo2 from '../../../assets/royallogo.png'
import Logo3 from '../../../assets/celebrity.png'
import Logo4 from '../../../assets/hollandlogo.png'
import Logo5 from '../../../assets/princess.png'

const CruisePartners = () => {
  return (
    <div className={classes.partners}>
      <h1>Cruise Partners</h1>
      <div className={classes.cruise_logos}>
        <img src={Logo1} alt='Norwegian' />
        <img src={Logo2} alt='Royal' />
        <img src={Logo3} alt='Celebrity' />
        <img src={Logo4} alt='Holland' />
        <img src={Logo5} alt='Princess' />
      </div>
    </div>
  )
};

export default CruisePartners;
