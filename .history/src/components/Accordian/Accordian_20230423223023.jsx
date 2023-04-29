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
        <h2>
          {item.title}
        </h2>
        <p>{item.content}</p>
      </div>
    ))}
    </>
  )
};

export default Accordian;
