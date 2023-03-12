import { Link } from "react-router-dom";
import LoginModal from '../../components/Modals/LoginModal'
import { useState } from 'react'
import './LoginBtn.css'

const LoginBtn = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Link className='login-btn' onClick={() => setOpenModal(true)}>Login</Link>
      <LoginModal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default LoginBtn;
