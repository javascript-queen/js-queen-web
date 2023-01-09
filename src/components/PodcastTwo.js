import './PodcastTwo.css'
import React from 'react'

const PodcastTwo = (props) => {
    return (
      <div className='hero-podcast-two'>
      <div className='content-podcast-two'>
        <h1>{props.headingtwo}</h1>
        <div className='buttons'>
        <a href='https://anchor.fm/programmersreadbooks' className='btn btn-podcast-two' style={{color: "#2E194B"}} target="_blank" rel="noreferrer" >Podcast Website</a>
        <a href='https://t.me/programmersreadbooks' className='btn btn-podcast-two' style={{color: "#2E194B"}} target="_blank" rel="noreferrer" >Telegram</a>
        </div>
      </div>
    </div>
    )
  }

export default PodcastTwo
