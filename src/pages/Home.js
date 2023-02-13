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
        "This website is showcasing my projects: from websites to my blog and YouTube channel.",
      open: false
    },
    {
      question: "I want to be a guest on your chanel. How to schedule time with you?",
      answer: "I have specific hours during the week at which I can work with you for 60 minutes in person. The call is completely free but I record the call for my channel. After you book an appointment with me, you’ll get all the technicalities to the provided email.",
      open: false
    },
    {
      question: "What exactly I'm receiving with an email from you after I've booked a call?",
      answer: "You'll get a link to my skype, a link to the google drive folder with the materials for preparation, the time info for our call which you can save to any calendar you’re using.",
      open: false
    },
    {
      question:
        "I booked a call, what’s next?",
      answer: "First and foremost, thank you for booking that call! I’m sure I can help you to nail your interview. Well, you’ll get an email from me with all the details and links specified in a previous question. If you didn’t get anything, please, email me privately: jsqueen.design@gmail.com",
      open: false
    },
    {
      question: "Why don't you have a subscription link on your website?",
      answer: "I personally don't like newsletters. I decided that even though it's an interesting marketing concept to get more followers. I don't want to have it for now. I want you to work through your interview with my materials. All the instructions will be on the google drive but still remember to: ask me any questions beforehand on telegram/skype/WhatsApp/email and send me your notes for me to go through them and to help you to correct some grammar or incoherence problems if any",
      open: false
    },
    {
      question: "What if I don’t want to record the call?",
      answer: "The call is completely free but I record the call for my channel. In case of your disagreement to be recorded please don’t book a call.",
      open: false
    },
    {
      question: "Why don't you have a subscription link on your website?",
      answer: "I personally don't like newsletters. I decided that even though it's an interesting marketing concept to get more followers. I don't want to have it for now.",
      open: false
    },
    {
      question: "How can I contact you?",
      answer: "You can find the links to my social media below. Plus, I have a contact form, which I read daily. Feel free to connect with me.",
      open: false
    },
    {
      question: "Which platform do you use for a call?",
      answer: "Currently I’m using Skype for a call. I have several reasons for choosing this platform: 1) we can save each other’s contacts there; 2) you’re getting a copy of your recording, too; 3) there’s no time limit for the call so in case we need to spend more time for some reason, there’s no technical limit to it",
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
