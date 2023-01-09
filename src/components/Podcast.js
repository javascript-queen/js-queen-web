import './Podcast.css'
import React from 'react'

const Podcast = (props) => {
    return (
      <div className='hero-podcast-two'>
        <div className='content-podcast-two'>
          <h1>{props.heading}</h1>
          <div className='buttons'>
            <a href='https://anchor.fm/js-abuse' className='btn btn-podcast-two' style={{color: "#2E194B"}} target="_blank" rel="noreferrer" >JavaScript Abuse</a>
            <a href='https://anchor.fm/programmersreadbooks' className='btn-light btn-podcast-two' style={{color: "#FFFFFF"}} target="_blank" rel="noreferrer" >Programmers Read Too</a>
          </div>
      </div>
    </div>
    )
  }

export default Podcast

