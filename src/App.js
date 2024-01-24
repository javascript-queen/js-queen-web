import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Blog from './pages/Blog'
import YouTube from './pages/YouTube'
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Front />} />
        <Route path='/youtube' element={<Data Analysis />} />
        <Route path='/blog' element={<Web3 />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
