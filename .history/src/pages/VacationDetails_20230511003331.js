import { useParams } from 'react-router-dom';
import { VacationCardData } from '../Layout/VacationsCards/VacationCardData';
const VacationDetails = () => {
  const { name } = useParams();
  const vacation = VacationCardData.find(vacation => vacation.name.replace(/\s/g, '') === name);
  return (
    <div>
      <h1>Hello</h1>

    </div>
  );
};

export default VacationDetails;
