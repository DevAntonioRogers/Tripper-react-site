
import React from "react";




function Destination({ destination }) {

  const {
    name,
    image
  } = destination


  return <div>
    <img src={image} alt='hi' />
  </div>;
};

export default Destination;
