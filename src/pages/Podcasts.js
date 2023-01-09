import React, { useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Podcast from '../components/Podcast'
import PodcastTwo from '../components/PodcastTwo'
import Faq from '../components/Faq'

const Podcasts = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Which podcasts have you created?",
      answer: "I made one podcast for developers named JS Abuse. It's an English podcast. Another podcast, Programmers read too, is fully in Russian.",
      open: false
    },
    {
      question: "What is so special about your podcast JS Abuse?",
      answer: "JS Abuse is connected to my blog series. So, if don't like podcasts or need to check the links I'm mentioning, feel free to check out my blog. This podcast is about all things JavaScript and beyond. You'll find out more about NASA using JS for its programs, my go-to podcasts for developers, choosing your first language to kick start your dev career, and many more.",
      open: false
    },
    {
      question:
        "Why should I listen to  Programmers read too?",
      answer: "My second podcast is made in a form of my conversation with the authors of the books I've read. I'm stating the questions I'd have loved to discuss with them, giving you a brief description of what you can find in the book, and trying to stay pretty neutral while summarizing my thoughts.",
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <Navbar />
      <Podcast heading="JavaScript Abuse"/>
      <PodcastTwo heading="Программисты Тоже Читают"/>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Podcasts
