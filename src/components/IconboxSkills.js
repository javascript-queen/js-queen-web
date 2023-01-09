import React from 'react'
import './Iconbox.css'
import { FaDragon, FaGlobeAmericas, FaCoffee, FaRegSnowflake, FaFlagUsa } from 'react-icons/fa'

const IconboxSkills = (props) => {
  return (
    <div className='parallax-icons'>
      <h1>{props.title}</h1>
      <div className='icons'>
        <div>
          <FaDragon  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>Chinese</p>
        </div>
        <div>
          <FaFlagUsa  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>English</p>
        </div>
        <div>
          <FaCoffee  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>French</p>
        </div>
        <div>
          <FaRegSnowflake  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>Russian</p>
        </div>
        <div>
          <FaGlobeAmericas  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>Spanish</p>
        </div>
      </div>
    </div>
  )
}

export default IconboxSkills
