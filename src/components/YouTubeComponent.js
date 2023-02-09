import './Podcast.css'
import React from 'react'
import { PopupButton } from 'react-calendly'


const YouTubeComponent = (props) => {
    return (
      <div className='hero-podcast-two'>
        <div className='content-podcast-two'>
          <h1>{props.heading}</h1>
          <div className='buttons'>
            <a href='https://www.youtube.com/channel/UCz9_XwtRYGGC0fwKkqq0iUQ' className='btn btn-podcast-two' style={{color: "#2E194B"}} target="_blank" rel="noreferrer" >YouTube</a>
            <PopupButton 
              url="https://calendly.com/jsqueen-design/60min"
              rootElement={document.getElementById("root")}
              className='btn-light btn-podcast-two' 
              style={{color: "#FFFFFF"}} 
              target="_blank" 
              rel="noreferrer"
              text="Schedule a call" />
          </div>
      </div>
    </div>
    )
  }

export default YouTubeComponent

