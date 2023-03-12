import classes from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <form className={classes.form}>
      <div>
        <label for="firstname">First Name</label>
        <input type="text" name="firstname" placeholder='Enter your first name' required />
      </div>
      <div>
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" placeholder='Enter your last name' required />
      </div>
      <div>
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder='Enter your email address' required />
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder='Enter a phone number' required />
      </div>
      <div className='form-text-area'>
        <label for="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="7"></textarea>
        <button>Submit</button>
      </div>
      <div className={classes.form_hours}>
        <h3>HOURS OF OPERATION</h3>
        <div>
          <p>MONDAY: 5AM - 5PM</p>
          <p>TUESDAY: 5AM - 5PM</p>
          <p>WEDNESDAY: CLOSED</p>
          <p>THURSDAY: CLOSED</p>
          <p>FRIDAY: 5AM - 3PM</p>
          <p>SAT & SUN: 5AM - 3PM</p>
        </div>
      </div>
      <h2>PLEASE ALLOW 48 HOURS FOR A RESPONSE</h2>
    </form>
  )
};

export default ContactForm;
