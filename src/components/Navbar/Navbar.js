import React from "react";
import { NavLink, Outlet, Link } from 'react-router-dom'
import { NavbarMenuItems } from './NavbarMenuItems'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Navbar.css'


function Navbar() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        transition: { type: 'spring', bounce: 0.3, duration: 0.5 }
      })
    }
    if (!isInView) {
      animation.start({
        x: '-100vw'
      })
    }
  })

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMenu = () => {
    setClick(false)
  }

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
          className="logo"
          animate={animation}
        >
          <Link to='/'>
            <i class="fa-solid fa-location-dot"></i>Tripper
          </Link>
        </motion.div>

        <motion.div
          animate={animation}
          className="mobile-icon"
        >
          <i onClick={handleClick} className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
        </motion.div>

        <ul onClick={closeMenu} className={click ? 'nav-menu active' : 'nav-menu'}>
          {NavbarMenuItems.map((item, index) => {
            return (
              <motion.li animate={animation} key={index}>
                <NavLink to={item.url} className={item.className}>
                  <i className={item.icon} />
                  {item.title}
                </NavLink>
              </motion.li>
            )
          })}
        </ul>
        <motion.li animate={animation} className="btn-container">
          <Link className='login-btn' to='/'>Login</Link>
          <Link className='signup-btn' to='/'>SignUp</Link>
        </motion.li>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar;
