import React from 'react'
import './Podcast.css'

const Podcast = (props) => {
    return (
      <div className='hero-podcast'>
      <div className='content-podcast'>
        <h1>{props.heading}</h1>
        <div className='buttons'>
        <a href='https://anchor.fm/js-abuse' className='btn-light btn-podcast' style={{color: "#FFFFFF"}} target="_blank" rel="noreferrer" >Podcast Website</a>
        <a href='https://medium.com/@js-queen' className='btn-light btn-podcast' style={{color: "#FFFFFF"}} target="_blank" rel="noreferrer" >Medium</a>
        </div>
      </div>
    </div>
    )
  }

export default Podcast
