import classes from './VacationsHero.module.css'

import { AiOutlineArrowDown } from 'react-icons/ai'

const VacationsHero = () => {

  const headerImage = ['https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80']

  return (
    <div className={classes.hero_container}>
      <div className={classes.inner_container}>
        <div className={classes.left}>
          <img src={headerImage[0]} alt='family' />
        </div>

        <div className={classes.right}>
          <h1>FAMILY VACATIONS</h1>
          <span>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</span>
          <div className={classes.btn}>
            <button>Start Planning <AiOutlineArrowDown /></button>
          </div>
        </div>

      </div>

    </div>
  )
};

export default VacationsHero;
