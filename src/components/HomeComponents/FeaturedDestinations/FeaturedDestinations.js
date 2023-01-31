import CardImage from './test2.jpg'
import './FeaturedDestinations.css'

function FeaturedDestinations() {
  return (
    <div className='featured-container'>

      <div className="card">
        <div className="card-image">
          <img alt='hi' src={CardImage} />
        </div>
        <div className='card-details'>
          <div className='card-location'>
            <h3>Bahamas Resorts World</h3>
            <span>Cancun, Mexico</span>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='card-pricing'>
                <span>4 nights from </span>
                <span>$1500</span>
              </div>
            </div>
          </div>




        </div>

        <div className='card-tags'>
          <span>Hotel Included</span>
          <span>All Inclusive</span>
          <span>Adults only</span>
        </div>
      </div>


    </div>


  );
}

export default FeaturedDestinations;
