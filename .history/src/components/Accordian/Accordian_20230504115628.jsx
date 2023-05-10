import classes from './Accordian.module.css'



const Accordian = () => {


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
    <div className={classes.accordian}>
    <h1 className={classes.accordian_title}>Frequently Asked Questions</h1>
    <div>
    {accordianData.map((data, index) => (
      <div key={index}>
        <details>
          <summary>
            <div className={classes.accordian_question}>{data.question}</div>
          </summary>
        <p>{data.answer}</p>
        </details>
      </div>
    ))}
    </div>
    </div>
    </>
  )
};

export default Accordian;