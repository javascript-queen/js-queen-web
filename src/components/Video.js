import React from 'react'
import { Link } from 'react-router-dom'
import chessVideo from '../assets/video-main.mp4'
import PDF from '../assets/doc/jsqueen-cv.pdf'

const Video = () => {

  return (
    <div className='hero'>
      <video autoPlay preload="auto" loop muted playsInline id="video">
        <source src={ chessVideo } type="video/mp4" />
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
