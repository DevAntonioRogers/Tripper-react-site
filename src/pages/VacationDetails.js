import { useParams } from 'react-router-dom';
import { VacationCardData } from '../Layout/VacationsCards/VacationCardData';

const VacationDetails = () => {
  const { name } = useParams();
  const vacation = VacationCardData.find(vacation => vacation.name.replace(/\s/g, '') === name);


  return (
    <div>

      <h1>{vacation.name}</h1>
      <img src={vacation.image} alt={vacation.name} />

    </div>
  );
};

export default VacationDetails;
