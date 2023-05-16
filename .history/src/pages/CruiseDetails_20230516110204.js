import { CruiseCardData } from "../Layout/CruisesCards/CruiseCardData";
import { useParams } from "react-router-dom";
import { useState } from 'react'

import './CruiseDetails.css'
import Accordian from "../components/Accordian/Accordian";
import Map from '../components/Map/Map'

import { FaStar } from "react-icons/fa";
import BookNowSection from "../components/DetailsComponents/BookNowSection";


const CruiseDetails = () => {

  const [currentImage, setCurrentImage] = useState(0)

  const { name } = useParams();
  const cruise = CruiseCardData.find(cruise => cruise.name.replace(/\s/g, '') === name);

  const rating = [...Array(5)].map((star, index) => {
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
  })
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
          <BookNowSection />
        </div>
      </div>


      <div className="rightSide">
        <div className="cruiseInfo">
          <h1>{cruise.name}</h1>
          <span className="details-rating">{rating}</span>
          <span>{cruise.stayAmount} {cruise.price}</span>
          <span>Departing from: {cruise.depart}</span>
        </div>
        <div className="cruise-description">
          {cruise.details}
        </div>
        <div className="cruise-highlights">
          <h1>Vacation Highlights</h1>
          {cruise.pool && (<h2>Private Pool</h2>)}
          {cruise.spa && (<h2>Luxury Spa</h2>)}
          {cruise.arcade && (<h2>24 Hour Arcade</h2>)}
          {cruise.smokingRooms && (<h2>Smoking Room Available</h2>)}
          {cruise.roomService && (<h2>Room Service Available</h2>)}
        </div>
      </div>
    </div>
  )
};

export default CruiseDetails;
