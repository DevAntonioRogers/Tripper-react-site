import Destination from "./Destination";
import { selectDestination } from "../../../shared/Data";


const DestinationList = () => {

  const destinations = selectDestination()

  return (
    <>
      <div>
        <h1>Our Destinations</h1>
      </div>

      <div>
        {destinations.map((destination) => {
          return (
            <div key={destinations.id}>
              <Destination destination={destination} />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default DestinationList;
