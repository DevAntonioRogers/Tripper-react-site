import React from "react";
import { useState } from 'react'

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(-1)
 const accordionData = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Content for Accordion Item 3",
    },
  ];

  return(
   <>
   {accordionData.map((item, index) => (
    <div key={index}>
      <div>
      <h1>{item.title}</h1>
      <span onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>+</span>
      </div>
      {openIndex === index && <p>{item.content}</p>}
    </div>
   ))}
   </>
  )
};

export default Accordian;
