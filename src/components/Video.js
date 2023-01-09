import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import chessVideo from '../assets/video-main.webm'
import PDF from '../assets/doc/jsqueen-cv.pdf'

const Video = () => {
  const videoRef = useRef()
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5
  }
  return (
    <div className='hero'>
      <video autoPlay preload="auto" loop muted playsInline id="video" ref={videoRef}   onCanPlay={() => setPlayBack()}>
        <source src={ chessVideo } type="video/webm" />
      </video>
      <div className='content'>
        <h1>Welcome to the World of JS Queen</h1>
        <p>Be sure to check out my projects</p>
        <div>
          <Link to="/about" className='btn'>About</Link>
          <Link to={PDF} target='_blank' className='btn-light' style={{color: "#FFFFFF"}}>Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
