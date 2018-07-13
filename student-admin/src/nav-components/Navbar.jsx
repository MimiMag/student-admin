import React from 'react'
import './Navbar.css'
import Dropdown from './Dropdown';

export const NavBar = () => {
  return <div className='navbar'>
    <h2 className="subtitle">Display Results</h2>
    <Dropdown />
    <h2 className="subtitle">Filter students</h2>
    <Dropdown />
  </div>
}
