import React, {Component} from 'react'
import './Podcast.css'

export class Podcast extends Component {
  render(){
    return (
      <div className='hero-podcast'>
      <div className='content-podcast'>
        <h1>{this.props.heading}</h1>
        <div className='buttons'>
        <a href='https://anchor.fm/js-abuse' className='btn-light btn-podcast' style={{color: "#FFFFFF"}} target="_blank" rel="noreferrer" >Podcast Website</a>
        <a href='https://medium.com/@js-queen' className='btn-light btn-podcast' style={{color: "#FFFFFF"}} target="_blank" rel="noreferrer" >Medium</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Podcast
