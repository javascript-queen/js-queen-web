import React from 'react'
import './HeroImage.css' 

const HeroImage = (props) => {
  return (
    <div className='hero-img'>
      <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.herotext}</p>
      </div>
    </div>
  )
}

export default HeroImage
