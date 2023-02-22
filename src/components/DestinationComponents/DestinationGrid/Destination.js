import './destinationGrid.css'

function Destination({ destination }) {

  const { name, image, className } = destination

  return (
    <>
      <img className={className} src={image} alt={name} />
      <div className='destination-text-container'>
        <h3>{name}</h3>
      </div>
    </>
  )
};

export default Destination;
