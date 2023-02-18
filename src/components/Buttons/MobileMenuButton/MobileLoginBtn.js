import { Link } from "react-router-dom";
import LoginModal from "../../Modals/LoginModal";
import { useState } from 'react'
import './MobileLoginBtn.css'

const MobileLoginBtn = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Link className='mobile-login-btn' onClick={() => setOpenModal(true)}>Login</Link>
      <LoginModal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default MobileLoginBtn;