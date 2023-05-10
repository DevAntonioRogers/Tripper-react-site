import { CruiseCardData } from "../Layout/CruisesCards/CruiseCardData";
import { useParams } from "react-router-dom";
import { useState } from 'react'

import './CruiseDetails.css'
import Accordian from "../components/Accordian/Accordian";
import Map from '../components/Map/Map'

import { FaStar } from "react-icons/fa";


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

        <Accordian />
        <div className="details_map">
          <Map />
        </div>
      </div>


      <div className="rightSide">
        <div className="cruiseInfo">
          <h1>{cruise.name}</h1>
          <span>{cruise.rating}</span>
          <span>{cruise.stayAmount} {cruise.price}</span>
          <span>Departing from {cruise.depart}</span>
        </div>
        <div className="cruise-description">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
            return (
              <FaStar
                color={
                  ratingValue > cruise.rating
                    ? 'grey'
                    : '#e63946'
                }
              />
            )
          })}
        </div>
        <div className="cruise-highlights">
          <h1>Vacation Highlights</h1>

        </div>
      </div>
    </div>
  )
};

export default CruiseDetails;
