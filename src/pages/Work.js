import React from 'react'
import Navbar from '../components/Navbar'
import LinkParallax from '../components/LinkParallax'
import Footer from '../components/Footer'
import TextWork from '../components/TextWork'
import Bees from '../assets/img/bb.png'
import FForest from '../assets/img/ff.png'
import Anna from '../assets/img/a.png'
import Ekelo from '../assets/img/e.png'
import Mars from '../assets/img/mmm.png'

const Work = () => {
  return (
    <>
      <Navbar />
      <LinkParallax image={Bees}  link="https://www.buffbees.io/" />
      <TextWork title="Hive Investments"/>
      <LinkParallax image={Anna} link="https://annagradient.com/" />
      <TextWork title="AnnaGradient"/>
      <LinkParallax image={Mars} link="https://www.m3mars.xyz/"/>
      <TextWork title="Mr&MrsMars"/>
      <LinkParallax image={Ekelo} />
      <TextWork title="Ekelo"/>
      <LinkParallax image={FForest}  link="https://www.friendforest.xyz/" />
      <TextWork title="Friend Forest"/>
      <Footer />
    </>
  )
}

export default Work
