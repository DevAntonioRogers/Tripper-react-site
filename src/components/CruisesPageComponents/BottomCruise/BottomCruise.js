import classes from './BottomCruise.module.css'
import image from '../../../assets/bottomcruise.png'

const BottomCruise = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div>
          <h1>Anything for now</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
};

export default BottomCruise;
