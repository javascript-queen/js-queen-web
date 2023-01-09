import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <Link to='/'><h1><span className='letter-violet'>J</span><span className='letter-grey'>Q</span></h1></Link>
      <ul className={click ? 'nav active' : 'nav'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <Link to='/podcasts'>Podcasts</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={ handleClick }>
        {click ? (<FaTimes size={20} style={{color: '#2E194B'}}/>) : (<FaBars size={20} style={{color: '#2E194B'}}/>)}
      </div>
    </div>
  )
}

export default Navbar
