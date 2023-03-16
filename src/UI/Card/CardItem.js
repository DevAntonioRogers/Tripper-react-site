import classes from './CardItem.module.css'


const CardItem = (props) => {
  return (
    <>
      <div className={classes.image_box}>
        <img className={classes.card_image} src={props.image}
          alt='card' />
      </div>
      <div className={classes.card_title}>
        <h1>{props.name}</h1>
        <span>{props.location}</span>
        <div>{props.rating}</div>
      </div>

      <div className={classes.card_details}>
        <div className={classes.card_price}>
          <div>{props.stayAmount}</div>
          <span>{props.price}</span>
        </div>
        <div>{props.details}</div>
      </div>
      <div className={classes.card_tags}>
        <div>{props.tags}</div>
      </div>
    </>
  );
};

export default CardItem;
