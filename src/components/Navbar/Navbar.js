import React from "react";
import { NavLink, Outlet, Link } from 'react-router-dom'
import { NavbarMenuItems } from './NavbarMenuItems'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Navbar.css'

// BUTTON COMPONENTS
import LoginBtn from "../Buttons/LoginBtn";
import SignUpBtn from "../Buttons/SignUpBtn";



function Navbar() {

  // ANIMATION TOGGLES
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        transition: { duration: 0.3 }
      })
    }
    if (!isInView) {
      animation.start({
        x: '-100vw'
      })
    }
  })

  // MOBILE MENU STATE
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMenu = () => {
    setClick(false)
  }

  // CANCEL SCROLLING WHEN MOBILE MENU IS TRUE
  useEffect(() => {
    if (click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [click])

  return (
    <div>
      <nav ref={ref} className="nav-container">
        <motion.div
          animate={animation}
          className="logo"
        >
          <Link to='/'>
            <i class="fa-solid fa-location-dot"></i>Tripper
          </Link>
        </motion.div>
        <div className="mobile-icon">
          <i onClick={handleClick} className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
        </div>
        <motion.div animate={animation} onClick={closeMenu} className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            {NavbarMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.url} className={item.className}>
                    <i className={item.icon} />
                    {item.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="nav-btn-container">
            <LoginBtn />
            <SignUpBtn />
          </div>
        </motion.div>
      </nav >
      <Outlet />
    </div>
  )
}

export default Navbar;
