import React from 'react'
import { Parallax } from 'react-parallax'
import './ImageParallax.css' 

const ImageParallax = (props) => {
  return (
    <Parallax className='parallax-img' bgImage={props.image} strength={-500}>
    <div className='content'>
      <span className='img-text'>{props.text}</span>
    </div>
  </Parallax>
  )
}
export default ImageParallax
