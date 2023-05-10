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
        <div className={classes.accordion_question}>
          <h1>{data.question}</h1>
          {/* <p>{openIndex === index ? '-' : '+'}</p> */}
        </div>
        <summary className={classes.accordion_answer}>
          {openIndex === index && <span>{data.answer}</span>}
        </summary>
      </details>
    ))}
  </div>
</div>
    </>
  )
};

export default Accordian;
