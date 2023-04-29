import classes from './Accordian.module.css'

import { useState } from 'react'

const Accordian = () => {

  const [openIndex, setOpenIndex] = useState(null)

  const accordianData = [
    {
      question: 'What if I have to cancel my trip?',
      answer: 'Contact our sales department for a full refund on your trip'
    },
    {
      question: 'What if I have to cancel my trip?',
      answer: 'Contact our sales department for a full refund on your trip'
    },
    {
      question: 'What if I have to cancel my trip?',
      answer: 'Contact our sales department for a full refund on your trip'
    },
    {
      question: 'What if I have to cancel my trip?',
      answer: 'Contact our sales department for a full refund on your trip'
    },
    {
      question: 'What if I have to cancel my trip?',
      answer: 'Contact our sales department for a full refund on your trip'
    }
  ]
  return (
    <>
    <h1>Frequently Asked Questions</h1>
    {accordianData.map((data, index) => (
      <div key={index} className={classes.accordian}>
        <div onClick={() => setOpenIndex(openIndex === index ? null : index)}>
          <h1>{data.question}</h1>
          <span>{openIndex === index ? '-' : '+'}</span>
        </div>
        {openIndex === index && <p>{data.answer}</p>}
      </div>
    ))}
    </>
  )
};

export default Accordian;
