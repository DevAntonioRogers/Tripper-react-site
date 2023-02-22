import FamilyPolaroids from '../../../assets/familypolaroids.png'
import './DestinationsBottom.css'

const DestinationsBottom = () => {
  return (
    <div className='destinations-bottom-container'>
      <div className='destinations-img-container'>
        <img src={FamilyPolaroids} alt={FamilyPolaroids} />
      </div>
      <div className='destinations-bottom-text'>
        <h2>A Family That Travels Stays Together</h2>
        <button>Travel Now!</button>
      </div>
    </div>
  );
};

export default DestinationsBottom;
