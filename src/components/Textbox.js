import React from 'react'
import './Textbox.css'

const Textbox = (props) => {
  return (
    <div className='parallax-text'>
      <h1>{props.title}</h1>
      <div className='columns'>
        <div>
          <h2>2015 - 2019</h2>
          <p>NRU HSE (MOSCOW)</p> 
          <p>World Economics and World Politics</p>
          <h2>2019 - 2022</h2>
          <p>BIT (BEIJING)</p>
          <p>Aerospace Engineering</p>
        </div>
        <div>
          <h2>2021 - 2022</h2>
          <p>SBERBANK SCHOOL 21</p>
          <p>Backend Programming (C)</p>
          <h2>2021 - 2022</h2>
          <p>EPAM RS SCHOOL</p> 
          <p>Front-end Development (Js, Typescript, React)</p>
        </div>
      </div>
    </div>
  )
}

export default Textbox
