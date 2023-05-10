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
    <div className={classes.accordion}>
  <h1 className={classes.accordion_title}>Frequently Asked Questions</h1>
  <div>
    {accordianData.map((data, index) => (
      <details key={index} className={classes.accordion_item}>
        <summary>
          {data.question}
          {/* <p>{openIndex === index ? '-' : '+'}</p> */}
        </summary>
     
         <span>{data.answer}</span>
      
      </details>
    ))}
  </div>
</div>
    </>
  )
};

export default Accordian;
