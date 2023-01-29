import './BottomHero.css';



const BottomHero = () => {
  return (
    <>
      <div className='bottom-hero--container'>
        <div className='bottom-hero--inner'>
          <i class="fa-solid fa-suitcase-rolling"></i>
          <div className='bottom-hero--text'>
            <p>First-Hand Experience</p>
            <p>Thousands of trips & reviews</p>
          </div>
        </div>
        <div className='bottom-hero--inner'>
          <i className="fa-solid fa-piggy-bank"></i>
          <div className='bottom-hero--text'>
            <p>Bundle Tickets + Hotel.</p>
            <p>Save over 60%</p>
          </div>
        </div>
        <div className='bottom-hero--inner'>
          <i className="fa-solid fa-bolt-lightning"></i>
          <div className='bottom-hero--text'>
            <p>Fast Response Times</p>
            <p>Best Customer Service</p>
          </div>
        </div>
        <div className='bottom-hero--inner'>
          <i className="fa-solid fa-suitcase-rolling"></i>
          <div className='bottom-hero--text'>
            <p>First-Hand Experience</p>
            <p>Thousands of tips & reviews</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomHero;
