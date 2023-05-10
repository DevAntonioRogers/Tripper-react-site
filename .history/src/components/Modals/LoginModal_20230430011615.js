import './Modals.css'
import { Link } from 'react-router-dom'

const LoginModal = () => {


  return (
    <>
      <dialog open id="favDialog" className='modal-overlay'>
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
                <button type='submit'>Sign In</button>
                <p>Forgot your password?</p>
              </div>
            </form>
            <p>Don't Have an account? <Link to='/'>Sign Up Now</Link></p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoginModal;
