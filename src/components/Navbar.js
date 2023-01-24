import React from "react";
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { NavbarMenuItems } from './NavbarMenuItems'
import './Navbar.css'




function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMenu = () => {
    setClick(false)
  }

  return (
    <>
      <nav className="nav-container">
        <Link to='/' className="logo">
          <i class="fa-solid fa-location-dot"></i>
          Tripper
        </Link>

        <div className="mobile-icon">
          <i onClick={handleClick} className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
        </div>

        <ul onClick={closeMenu} className={click ? 'nav-menu active' : 'nav-menu'}>

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
        <li className="btn-container">
          <Link className='login-btn' to='/'>Login</Link>
          <Link className='signup-btn' to='/'>SignUp</Link>
        </li>



      </nav>

      <Outlet />

    </>
  )
}

export default Navbar;
