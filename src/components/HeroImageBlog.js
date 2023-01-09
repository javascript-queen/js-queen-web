import React, { useRef } from 'react'
import chessVideo from '../assets/video-main.webm'

const HeroImageBlog = () => {
  const videoRef = useRef()
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5
  }
  return (
    <div className='hero'>
      <video autoPlay loop muted playsInline id="video" ref={videoRef}   onCanPlay={() => setPlayBack()}>
        <source src={ chessVideo } type="video/webm" />
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