import './FeaturedDestinations.css'

function FeaturedCard({ featured }) {
  const {
    image,
    name,
    location,
    details,
    stayAmount,
    price,
    tag1,
    tag2,
    tag3 } = featured;
  return (
    <div className="card">
      <div className="card-image">
        <img alt='hi' src={image} />
      </div>
      <div className='card-details'>
        <div className='card-location'>
          <h3>{name}</h3>
          <span>{location}</span>
          <div className='card-rating'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>5/5</span>
          </div>
          <div className='card-location-pricing'>
            <p className='location-info'>
              {details}
            </p>
            <div className='card-pricing'>
              <span>{stayAmount}</span>
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='card-tags'>
        <span>{tag1}</span>
        <span>{tag2}</span>
        <span>{tag3}</span>
      </div>
    </div>
  );
}

export default FeaturedCard;
