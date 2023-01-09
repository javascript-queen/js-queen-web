import React from 'react'
import { Parallax } from 'react-parallax'
import './LinkParallax.css' 

const LinkParallax = (props) => {
  return (
    <Parallax className='link-img' bgImageStyle={{ opacity: '.3'}} bgImage={props.image} strength={-600}>
    <div className='link-content'>
      <span id='link-text'><a href={props.link} target="_blank" rel="noreferrer">Check it out</a></span>
    </div>
  </Parallax>
  )
}
export default LinkParallax

