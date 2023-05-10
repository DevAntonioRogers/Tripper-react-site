import './Modals.css'
import { Link } from 'react-router-dom'

const LoginModal = ({ open, close }) => {
  if (!open) return null

  return (
    <>
      <dialog onClick={close} className='modal-overlay'>
        <div onClick={(e) => e.stopPropagation()} className="modal-container">
          <h1>Welcome Back!</h1>
          <div className='modal-inner'>
            <form className='login-modal-form'>
              <div className='login-modal-email'>
                <i class="fa-solid fa-user"></i>
                <input type='email' placeholder='Email Address' />
              </div>
              <div className='login-modal-password'>
                <i class="fa-solid fa-key"></i>
                <input type='password' placeholder='Password' />
              </div>
              <div>
                <button onClick={close} type='submit'>Sign In</button>
                <p>Forgot your password?</p>
              </div>
            </form>
            <p>Don't Have an account? <Link to='/'>Sign Up Now</Link></p>
          </div>
        </div>
      </dialog>
      <p>
        <button id="showDialog">Show the dialog</button>
      </p>
    </>
  );
};

export default LoginModal;
