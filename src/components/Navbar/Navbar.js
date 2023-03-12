import React from "react";
import { NavLink, Outlet, Link } from 'react-router-dom'
import { NavbarMenuItems } from './NavbarMenuItems'
import { useEffect, useState } from 'react';
import './Navbar.css'

import LoginBtn from '../../UI/Buttons/LoginBtn'
import SignUpBtn from "../../UI/Buttons/SignUpBtn";



function Navbar() {

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
      <nav className="nav-container">
        <div
          className="logo"
        >
          <Link to='/'>
            <i class="fa-solid fa-location-dot"></i>Tripper
          </Link>
        </div>
        <div className="mobile-icon">
          <i onClick={handleClick} className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
        </div>
        <div onClick={closeMenu} className={click ? 'nav-menu active' : 'nav-menu'}>
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
        </div>
      </nav >
      <Outlet />
    </div>
  )
}

export default Navbar;
