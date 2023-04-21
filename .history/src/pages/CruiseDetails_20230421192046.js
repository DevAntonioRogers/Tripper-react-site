import { CruiseCardData } from "../Layout/CruisesCards/CruiseCardData";
import { useParams } from "react-router-dom";
import { useState } from 'react'

import './CruiseDetails.css'

const CruiseDetails = () => {

  const [currentImage, setCurrentImage] = useState(0)

  const { name } = useParams();
  const cruise = CruiseCardData.find(cruise => cruise.name.replace(/\s/g, '') === name);


  return (
    <div className="cruiseDetails">
      <div className="leftSide">
        <div className="mainImg">
          <img src={cruise.moreImages[currentImage]} alt='' />
        </div>

        <div className="moreImg">
          <img src={cruise.moreImages[0]} onClick={e => setCurrentImage(0)} alt='' />
          <img src={cruise.moreImages[1]} onClick={e => setCurrentImage(1)} alt='' />
          <img src={cruise.moreImages[2]} onClick={e => setCurrentImage(2)} alt='' />
          <img src={cruise.moreImages[3]} onClick={e => setCurrentImage(3)} alt='' />
        </div>
      </div>


      <div className="rightSide">
        <div className="cruiseInfo">
          <h1>{cruise.name}</h1>
          <span>{cruise.stayAmount} {cruise.price}</span>
          <span>Departing from {cruise.depart}</span>
        </div>
        <div className="cruise-d">
          {cruise.details}
        </div>
      </div>
    </div>
  )
};

export default CruiseDetails;
