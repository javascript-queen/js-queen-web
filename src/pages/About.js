import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageParallax from '../components/ImageParallax'
import Textbox from '../components/Textbox'
import Iconbox from '../components/Iconbox'
import IconboxSkills from '../components/IconboxSkills'
import imageOne  from '../assets/img/china.jpg'
import imageTwo  from '../assets/img/tsinghua.jpg'
import imageThree  from '../assets/img/kazan.webp'

const About = () => {
  return (
    <>
      <Navbar />
      <ImageParallax image={imageOne}  text="My story starts here" />
      <Textbox title="Educaion"/>
      <ImageParallax image={imageTwo}  text="Goes places"/>
      <Iconbox title="Stack"/>
      <ImageParallax image={imageThree}  text="Continues on" />
      <IconboxSkills title="Skills"/>
      <Footer />
    </>
  )
}

export default About
