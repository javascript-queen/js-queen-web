import React from 'react'
import chessVideo from '../assets/video-main.mp4'

const HeroImageBlog = () => {

  return (
    <div className='hero'>
      <video autoPlay loop muted playsInline id="video">
        <source src={ chessVideo } type="video/mp4" />
      </video>
      <div className='content'>
        <h1>My Medium Blog: Javascript Abuse</h1>
        <p>Scroll down to see the content</p>
        <div>
          <a href="https://medium.com/@js-queen" target="_blank" rel="noreferrer" className='btn'>Medium</a>
        </div>
      </div>
    </div>
  )
}

export default HeroImageBlog