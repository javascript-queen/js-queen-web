import React from 'react'
import './Footer.css'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow, FaTelegram, FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaLocationArrow className="icon icon-location" size={20} styles={{color: '#2E194B', marginRight: '2rem'}} />
            <div>
              <a href="https://www.google.com/maps?q=mexico,+queretaro&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiD3biD9rf8AhUcIEQIHRUkBOEQ_AUoAXoECAEQAw" target="_blank" rel="noreferrer"><h4>Mexico, Querétaro</h4></a>
            </div>
          </div>
          <div className="location">
            <FaEnvelope className="icon icon-location" size={20} styles={{color: '#2E194B', marginRight: '2rem'}} />
            <div>
            <h4 onClick={() => window.location = 'mailto:jsqueen.design@gmail.com'}>jsqueen.design@gmail.com</h4>
            </div>
          </div>
          <div className="location">
            <FaCopyright className="icon icon-location" size={20} styles={{color: '#2E194B', marginRight: '2rem'}} />
            <div>
            <h4>JS Queen 2023</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>Hey! I'm JS Queen. I am here to make 
            your websites fast, responsive, and beautiful. 
            I've been Senior Dev for several projects both 
            on- and off-chain, and I understand 
            how important a high-quality job is for industries 
            in which a minor mistake can make 
            all the difference.</p>
          <div className='social'>
            <a href='https://github.com/javascript-queen' target="_blank" rel="noreferrer"><FaGithub className='icon' size={30} styles={{color: '#2E194B', marginRight: '1rem'}} /></a>
            <a href='https://twitter.com/jsqueen_design' target="_blank" rel="noreferrer"><FaTwitter className='icon' size={30} styles={{color: '#2E194B', marginRight: '1rem'}} /></a>
            <a href='https://www.linkedin.com/in/anna-traylor-607548234/n' target="_blank" rel="noreferrer"><FaLinkedin className='icon' size={30} styles={{color: '#2E194B', marginRight: '1rem'}} /></a>
            <a href='https://www.instagram.com/anna_jsq' target="_blank" rel="noreferrer"><FaInstagram className='icon' size={30} styles={{color: '#2E194B', marginRight: '1rem'}} /></a>
            <a href='https://t.me/anna_jsq' target="_blank" rel="noreferrer"><FaTelegram className='icon' size={30} styles={{color: '#2E194B', marginRight: '1rem'}} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
