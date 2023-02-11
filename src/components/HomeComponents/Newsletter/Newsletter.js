import './Newsletter.css'
import { useState } from 'react'




const Newsletter = () => {



  const [email, setEmail] = useState('')

  const newsletterFormSumbit = (e) => {
    e.preventDefault()
    setEmail('')
  }
  return (
    <div className="newsletter-container">
      <div className="newsletter-text-container">
        <h1>GET 15% OFF YOUR NEXT TRIP!</h1>
        <h3>By Subscribing to our Weekly Newsletter</h3>
      </div>

      <form onSubmit={newsletterFormSumbit} className='newsletter-form'>
        <i class="fa-solid fa-envelope"></i>
        <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Enter Email Address' required />
        <i class="fa-solid fa-share"></i>
      </form>
    </div>
  )
}

export default Newsletter