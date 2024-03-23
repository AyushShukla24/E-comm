import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='img' className='nav-logo'/>
        <img src={navProfile} alt='img' className='nav-profile'/>
    </div>
  )
}