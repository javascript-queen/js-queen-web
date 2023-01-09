import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Podcast from '../components/Podcast'
import PodcastTwo from '../components/PodcastTwo'


const Podcasts = () => {

  return (
    <>
      <Navbar />
      <Podcast heading="JavaScript Abuse"/>
      <PodcastTwo headingtwo="Программисты Тоже Читают"/>
      <Footer />
    </>
  )
}

export default Podcasts
