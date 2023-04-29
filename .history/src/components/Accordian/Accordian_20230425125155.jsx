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
    accordianData.map((data, index) => (
      <div key={index}>
        <div>
          {data.question}
        </div>
        <p>{data.answer}</p>
      </div>
    ))
  )
};

export default Accordian;
