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
    <h1>Frequent;y Asked Questions</h1>
    {accordionData.map((item, index) => (
      <div key={index}>
        <h2>
          {item.title}
        </h2>
        <span onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
          {openIndex === index ? '-' : "+"}
        </span>
        {openIndex === index && <p>{item.content}</p>}
      </div>
    ))}
    </>
  )
};

export default Accordian;
