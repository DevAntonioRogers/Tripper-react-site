import './Modals.css'
import { Link } from 'react-router-dom'

const SignupModal = ({ open, close }) => {
  if (!open) return null

  return (
    <div onClick={close} className='modal-overlay'>
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <h1>SIGNUP NOW!</h1>
        <div className='modal-inner'>
          <form className='signup-modal-form'>
            <div>
              <input type='text' placeholder='First Name' required />
              <input type='text' placeholder='Last Name' required />
            </div>
            <input type='email' placeholder='Enter Email Address' required />
            <input type='password' placeholder='Enter Desired Password' required />
            <button>SIGNUP NOW</button>
          </form>
          <p>Already have an account? <Link to='/'>Log In Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
