import { Link } from "react-router-dom";
import { useState } from 'react'
import SignupModal from "../Modals/SignupModal";
import './SignUpBtn.css'

const SignUpBtn = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Link className='signup-btn' onClick={() => setOpenModal(true)}>Signup</Link>
      <SignupModal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default SignUpBtn;
