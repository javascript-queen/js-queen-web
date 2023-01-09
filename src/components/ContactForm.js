import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_njzch0h', 'template_4vg269r', form.current, 'Lrc5cVP_DIXLQOscC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  // }

  // const [isDarkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode();
  // };

  return (
    // <div data-theme={theme}>
    // <DarkModeSwitch
    //   onChange={toggleDarkMode} 
    //   onClick={switchTheme} 
    //   checked={isDarkMode} />
    //   {theme === 'light' ? 'Dark' : 'Light'}

  
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input className='button' type="submit" value="Send"/>
    </form>
    // </div>
  )
}

export default ContactForm;