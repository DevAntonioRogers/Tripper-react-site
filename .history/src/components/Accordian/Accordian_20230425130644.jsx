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
    <div className={classes.accordian}>
    {accordianData.map((data, index) => (
      <div key={index}>
        <div className={classes.accordian_question} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
          <h1>{data.question}</h1>
          <p>{openIndex === index ? '-' : '+'}</p>
        </div>
        {openIndex === index && <span>{data.answer}</span>}
      </div>
    ))}
    </div>
    </>
  )
};

export default Accordian;
