import React, { useEffect } from 'react'
import Profile from '../assets/Anu prem.jpg'
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import {Element} from "react-scroll"

const Home = () => {
 
  const image = [Profile]
  return (
    
    <Element name="home">
    <div   className='bg-cyan-50 pb-20 pt-20'>
      <div className='grid sm:grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-2  sm:h-full flex lg:h-135 md:h-full flex justify-center items-center mx-30'>
        <div data-aos="fade-right" className='md:text-left lg:text-left sm:text-center'>
          <h5 className='font-bold text-md text-cyan-600'>Hello,I'm</h5>
          <h1 className='text-6xl font-bold text-gray-800 hover:text-teal-600 transition-colors cursor-pointer'>Anu Prem</h1>
          <h3 className='text-xl/20 '>React.js Developer</h3>
          <p className=' text-lg'>Passionate about creating beautiful, responsive web applications with modern technologies. Currently pursuing B.E. CSE and specializing in React.js development.</p>
          <div className='gap-10 flex md:flex justify-items-center'>
            <a href="https://drive.google.com/file/d/1AhzhTcG9M9dHuZkpiEDTm5HU5AQEYFnw/view?usp=drivesdk">
          <button className='gap-1 bg-cyan-500 flex place-items-center flex justify-center rounded-md w-40 h-9 mt-7 hover:cursor-pointer text-white hover:bg-cyan-600 hover:-translate-z-1 duration-300 delay-150 hover:scale-110'><IoDownloadOutline />Download Resume</button>
          </a>
          <a href="#contact">
          <button className='gap-1 flex place-items-center flex justify-center rounded-md w-40 h-9 mt-7 border-2 border-solid border-cyan-500 me-3 text-cyan-500 hover:bg-cyan-500 cursor-pointer hover:text-white'><IoIosContact />Contact Me</button>
          </a>
          </div>
        </div >
        <div data-aos="fade-left" className='place-items-center'>{image.map((src, index) => (
          <img key={index} src={src} alt="item" className='w-60 rounded-full border-5 border-white ' />
        ))}</div>
      </div>
    </div>
    </Element>
  )
}

export default Home
