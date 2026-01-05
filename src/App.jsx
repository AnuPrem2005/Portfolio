import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Link} from "react-scroll"
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
 import {FaLinkedin,FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub,FaInstagramSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from 'aos'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,    
      easing: "ease-in-out",
      once: false,       
      offset: 100,        
    });
    Aos.refresh()
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BrowserRouter>

        {/* <!-- Include this script tag or install `@tailwindplus/elements` via npm: --> */}
        <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
      <nav className="bg-cyan-100 sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link to="home" smooth={true} duration={500} href="#home" className="font-bold text-2xl">
            Anu Prem
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden sm:flex space-x-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link 
                key={item}
                to={`${item.toLowerCase()}`}
                smooth={true}
                duration={500}
                className="px-3 py-2 text-sm font-medium rounded hover:bg-cyan-500 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="sm:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="sm:hidden bg-cyan-100 px-4 pb-4 space-y-2">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded hover:bg-cyan-500 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
      <footer className=' w-full bg-cyan-950 pt-10 pb-10 ps-15 pe-15'>

        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>

        <div className='lg:justify-items-start md:justify-items-start sm:justify-items-center'>
          <a href="#home" className='lg:text-start md:text-center sm:text-center'>
          <Link to="home" smooth={true} duration={500} className='font-bold text-white text-2xl'>Anu Prem</Link>
          </a>
          <p className='text-white mt-5 opacity-75'>React.js Developer passionate about creating <br /> beautiful, responsive web applications with <br /> modern technologies.</p>
          <div className='mt-5 flex gap-5'>
            <a href="https://github.com/AnuPrem2005">
                    <div className='rounded-lg grid place-content-center bg-black w-10 h-10 hover:cursor-pointer text-white hover:-translate-y-1 delay-150 duration-300 hover:scale-110 hover:bg-blue-500'><FaGithub className='text-white text-xl' /></div>
                    </a>
                    <a href="www.linkedin.com/in/anu-prem">
                    <div className='rounded-lg grid place-content-center bg-black w-10 h-10 hover:cursor-pointer text-white hover:-translate-y-1 delay-150 duration-300 hover:scale-110 hover:bg-blue-500'><FaLinkedin className='text-white text-xl' /></div>
                    </a>
                    <a href="https://x.com/AnuPremJayaKum1">
                    <div className='rounded-lg grid place-content-center bg-black w-10 h-10 hover:cursor-pointer text-white hover:-translate-y-1 delay-150 duration-300 hover:scale-110 hover:bg-blue-500'><FaSquareXTwitter className='text-white text-xl' /></div>
                    </a>
                    <a href="https://www.instagram.com/sucesful_loser?igsh=MW5ubnd2aTk0aHVoMg%3D%3D&utm_source=qr">
                    <div className='rounded-lg grid place-content-center bg-black w-10 h-10 hover:cursor-pointer text-white hover:-translate-y-1 delay-150 duration-300 hover:scale-110 hover:bg-blue-500'><FaInstagramSquare className='text-white text-xl' /></div>
                    </a>
                  </div>
        </div>

        <div className='justify-items-center'>
          <h1 className='font-bold text-white text-2xl'>Quick Links</h1>
          <div className='grid justify-items-center mt-5'>
            <Link to="home" smooth={true} duration={500} href="#home" className="px-3 py-2 text-sm font-medium text-white opacity-75 hover:opacity-100">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} href="#about" className="px-3 py-2 text-sm font-medium text-white opacity-75 hover:opacity-100">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} href="#skills" className="px-3 py-2 text-sm font-medium text-white opacity-75 hover:opacity-100">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} href="#projects" className="px-3 py-2 text-sm font-medium text-white opacity-75 hover:opacity-100">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} href="#contact" className="px-3 py-2 text-sm font-medium text-white opacity-75 hover:opacity-100">
          Contact
        </Link>
          </div>
        </div>

        <div className='lg:justify-items-end md:justify-items-end sm:justify-items-center'>
          <h1 className='font-bold text-white text-2xl'>Get In Touch</h1>
          <a href="mailto:anupremj@gmail.com" className='lg:text-end md:text-center sm:text-center'>
          <p className='text-white mt-5 opacity-75 hover:opacity-100 hover:cursor-pointer'>anupremj@gmail.com</p>
          </a>
          <a href="tel:+919344717272" className='lg:text-end md:text-center sm:text-center'>
          <p className='text-white mt-3 opacity-75 hover:opacity-100 hover:cursor-pointer'>+91 93447 17272</p>
          </a>
          <a href="https://www.google.com/maps/place/Nagercoil,+Tamil+Nadu/@8.171388,77.3738321,13z/data=!3m1!4b1!4m6!3m5!1s0x3b04f0dfc0ddc7b7:0x809a9e32a95d3ed1!8m2!3d8.1832857!4d77.4118996!16zL20vMDJoemR5?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" className='lg:text-end md:text-center sm:text-center'>
          <p className='text-white mt-3 opacity-75 hover:opacity-100 hover:cursor-pointer'>Nagercoil,India</p>
          </a>
        </div>

        </div>

        <div className='h-1 w-full m-5 bg-white opacity-5'></div>

        <div className='flex justify-between items-center'>
        <p className='text-white opacity-75'>© 2025 Anu Prem. All rights reserved.</p>
        <p className='text-white opacity-75'>Built with React.js & Tailwind CSS</p>
        </div>

      </footer>
    </div>

  )
}

export default App
