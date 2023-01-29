import CardImage from './tests.jpg'
import './FeaturedDestinations.css'

function FeaturedDestinations() {
  return (
    <div className='featured-container'>
      <h1>OUR 5 STAR DESTINATIONS</h1>
      <div className="card">
        <div className="card-image">
          <img alt='hi' src={CardImage} />
        </div>
        <div className='card-details'>
          <h3>Bahamas Resorts World</h3>
          <div className='card-rating'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>5/5</span>
          </div>

          <div className='card-tags'>
            <span>60% Off </span>
            <span>Family</span>
          </div>

          <div className='card-info'>
            <p>lorem fdsfdsfdsfdsfdsfdsff sfsdfds fsd fsdf dsf dsf dsf dsf sdfsdfsdf dsf dsf dsaf sadf dsf dsf dsf s fsd fds fsd f dsf asd fds fsd fds f dsf dsa fds fs f sdf sdf sdf dsf dsf ds fs fsd fsd f sf dsf sd f dsf dsf dsf ds fas fd sf sdf dsf </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedDestinations;
