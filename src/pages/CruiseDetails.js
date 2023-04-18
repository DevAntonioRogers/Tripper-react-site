import { CruiseCardData } from "../Layout/CruisesCards/CruiseCardData";
import { useParams } from "react-router-dom";

const CruiseDetails = () => {
  const { name } = useParams();
  const cruise = CruiseCardData.find(cruise => cruise.name.replace(/\s/g, '') === name);
  return <div>
    {name}

    <div>

    </div>
  </div>;
};

export default CruiseDetails;
