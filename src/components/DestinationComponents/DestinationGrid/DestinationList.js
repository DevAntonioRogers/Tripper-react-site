import Destination from "./Destination";
import { selectDestination } from "../../../shared/Data";


const DestinationList = () => {

  const destinations = selectDestination()

  return (
    <>
      <div id="destinations" className="our-destinations-text">
        <h1>Our Destinations</h1>
      </div>

      <div className="destination-container">
        {destinations.map((destination) => {
          return (
            <div className="destination-inner-container" key={destinations.id}>
              <Destination destination={destination} />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default DestinationList;
