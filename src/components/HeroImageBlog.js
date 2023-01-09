import React, { useRef } from 'react'
import './Video.css'
import chessVideo from '../assets/video-main.mp4'

const HeroImageBlog = () => {
  const videoRef = useRef()
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5
  }
  return (
    <div className='hero'>
      <video autoPlay loop muted playsInline id="video" ref={videoRef}   onCanPlay={() => setPlayBack()}>
        <source src={ chessVideo } type="video/mp4" />
      </video>
      <div className='content'>
        <h1>My Medium Blog</h1>
        <p>Scroll down to see the content</p>
        <div>
          <a href="https://medium.com/@js-queen" target="_blank" rel="noreferrer" className='btn'>Medium</a>
        </div>
      </div>
    </div>
  )
}

export default HeroImageBlog