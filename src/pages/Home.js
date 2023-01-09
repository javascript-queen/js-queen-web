import React, { useState} from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const Home = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What can I find on the website?",
      answer:
        "This website is showcasing my projects: from websites to my blog and podcasts.",
      open: false
    },
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
    {
      question: "Why don't you have a subscription link on your website?",
      answer: "I personally don't like newsletters. So, I decided that even though it's an interesting marketing concept to ge more followers. I don't want to have it for now.",
      open: false
    },
    {
      question: "How can I contact you?",
      answer: "You can find the links to my social media below. Plus, I have a contact form, which I read daily. So, feel free to connect with me.",
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
      <Video />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Home
