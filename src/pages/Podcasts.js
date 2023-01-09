import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Podcast from '../components/Podcast'
import Faq from '../components/Faq'


const Podcasts = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Which podcasts do you lead?",
      answer: "I made one podcast for developers named JS Abuse. It's an English podcast. My other podcast, Programmers Read Too, is fully in Russian.",
      open: false
    },
    {
      question: "What is so special about your podcast JS Abuse?",
      answer: "JS Abuse is connected to my blog series. So, if you don't like podcasts or need to check the links I'm mentioning, feel free to check out my blog. This podcast is about all things JavaScript and beyond. You'll find out more about NASA using JS for its programs, my go-to podcasts for developers, choosing your first language to kick start your dev career, and many more.",
      open: false
    },
    {
      question:
        "Why should I listen to  Programmers Read Too?",
      answer: "My second podcast is made in the form of a conversation with the authors of the books I've read. I state the questions I'd have loved to discuss with them, giving you a brief description of what you can find in the book, and trying to stay pretty objective while summarizing my thoughts.",
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
      <Podcast heading="My podcasts"/>
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
