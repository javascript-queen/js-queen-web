import React from 'react'
import './Iconbox.css'
import { FaReact, FaJs, FaPython, FaEthereum, FaHtml5, FaCss3Alt } from 'react-icons/fa'

const Iconbox = (props) => {
  return (
    <div className='parallax-icons'>
      <h1>{props.title}</h1>
      <div className='icons'>
        <div>
          <FaReact  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>React</p>
        </div>
        <div>
          <FaJs  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>JS</p>
        </div>
        <div>
          <FaPython  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>Python</p>
        </div>
        <div>
          <FaEthereum  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>Solidity</p>
        </div>
        <div>
          <FaHtml5  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>HTML</p>
        </div>
        <div>
          <FaCss3Alt  size={50} styles={{color: '#2E194B', marginRight: '1rem'}} />
          <p>CSS</p>
        </div>
      </div>
    </div>
  )
}

export default Iconbox
