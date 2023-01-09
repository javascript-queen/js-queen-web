import React from 'react'
import './Textbox.css'

const Textbox = (props) => {
  return (
    <div className='parallax-text'>
      <h1>{props.title}</h1>
      <div className='columns'>
        <div>
          <h2>2015 - 2019</h2>
          <p>Higher School of Economics (MOSCOW)</p> 
          <p>World Economics and World Politics</p>
          <h2>2019 - 2022</h2>
          <p>Beijing Institute of Technology (BEIJING)</p>
          <p>Aerospace Engineering</p>
        </div>
        <div>
          <h2>2021 - 2022</h2>
          <p>Sberbank School 21</p>
          <p>Backend Programming (C)</p>
          <h2>2021 - 2022</h2>
          <p>EPAM RS School</p> 
          <p>Front-end Development (JS, Typescript, React)</p>
        </div>
      </div>
    </div>
  )
}

export default Textbox
