import React from 'react'
import Bkrs from '../assets/caro1.jpg'
import Watch from '../assets/img1.webp'
import Port from'../assets/Portfolio.PNG'
import { FaShareFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-20 pb-20'>
      <div data-aos="fade-up">
      <h1 className='font-bold text-xl text-cyan-500 w-full flex place-content-center'>My Work</h1>
      <h2 className='text-2xl font-bold text-gray-800 flex place-content-center mt-5'>Featured Projects</h2>
      <p className='flex place-content-center text-lg text-center mt-5'>Here are some of my recent projects that showcase my skills in <br /> React.js and modern web development technologies.</p>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-15 lg:mx-35 md:mx-17 sm:mx-5'>

        <div data-aos="zoom-in" className='gap-2 bg-white rounded-xl shadow-xl w-80 h-110 hover:shadow-xl/20 hover:-translate-y-4 delay-150 duration-300 overflow-hidden group'>
          <img src={Bkrs} alt="" className='group-hover:scale-110 delay-150 duration-300' />
          <h1 class="font-bold text-start mx-3 mt-5 opacity-80 group-hover:text-cyan-600 delay-150">
            Delicious Bakes Made with Love
          </h1>
          <p className='text-start mx-3 mt-3 opacity-80'>A responsive frontend website developed for a bakery brand, emphasizing UI design, layout responsiveness, and user experience using modern web technologies.</p>
          <div className='mx-3 flex gap-3 mt-3 opacity-80'>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>React.js</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>Bootstrap 5</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>CSS</p>
          </div>

          <div className='gap-5 flex mx-3 me-3'>
            <a href="https://anuprem2005.github.io/Ayra-Bakers/">
                    <button className='gap-1 bg-cyan-500 flex place-items-center flex justify-center rounded-md w-35 h-9 mt-7 hover:cursor-pointer text-white hover:bg-cyan-600 hover:-translate-y-[-3] delay-150 duration-300 hover:scale-110'><FaShareFromSquare />Live Demo</button>
                    </a>
                    <a href="https://github.com/AnuPrem2005/Ayra-Bakers">
                    <button className='gap-1 flex place-items-center flex justify-center rounded-md w-35 h-9 mt-7 border-2 border-solid border-cyan-500 me-3 text-cyan-500 hover:bg-cyan-500 cursor-pointer hover:text-white'><FiGithub />Code</button>
                    </a>
                    </div>

        </div>
        <div data-aos="zoom-in" className='gap-2 bg-white rounded-xl shadow-xl w-80 h-110 hover:shadow-xl/20 hover:-translate-y-4 delay-150 duration-300 overflow-hidden group'>
          <img src={Watch} alt="" className='group-hover:scale-110 delay-150 duration-300' />
          <h1 class="font-bold text-start mx-3 mt-5 opacity-80 group-hover:text-cyan-600 delay-150">
            Watch Store Frontend Design
          </h1>
          <p className='text-start mx-3 mt-3 opacity-80'>A responsive watch website designed using HTML, CSS, and Bootstrap, featuring a clean layout, product-focused UI, and smooth user experience across all devices.</p>
          <div className='mx-3 flex gap-3 mt-3 opacity-80'>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>HTML</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>Bootstrap 5</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>CSS</p>
          </div>

          <div className='gap-5 flex mx-3'>
            <a href="https://anuprem2005.github.io/Timex/">
                    <button className='gap-1 bg-cyan-500 flex place-items-center flex justify-center rounded-md w-35 h-9 mt-7 hover:cursor-pointer text-white hover:bg-cyan-600 hover:-translate-y-[-3] delay-150 duration-300 hover:scale-110'><FaShareFromSquare />Live Demo</button>
                    </a>
                    <a href="https://github.com/AnuPrem2005/Timex">
                    <button className='gap-1 flex place-items-center flex justify-center rounded-md w-35 h-9 mt-7 border-2 border-solid border-cyan-500 me-3 text-cyan-500 hover:bg-cyan-500 cursor-pointer hover:text-white'><FiGithub />Code</button>
                    </a>
                    </div>

        </div>
        <div data-aos="zoom-in" className='gap-2 bg-white rounded-xl shadow-xl w-80 h-110 hover:shadow-xl/20 hover:-translate-y-4 delay-150 duration-300 overflow-hidden group'>
          <img src={Port} alt="" className='group-hover:scale-110 delay-150 duration-300' />
          <h1 class="font-bold text-start mx-3 mt-5 opacity-80 group-hover:text-cyan-600 delay-150">
            Portfolio Website
          </h1>
          <p className='text-start mx-3 mt-3 opacity-80'>A personal portfolio website built using HTML, Tailwind CSS, React, and JavaScript to showcase projects, skills, and a clean, responsive user interface.</p>
          <div className='mx-3 gap-3 mt-3 opacity-80'>
            <div className='flex'>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>Tailwind CSS</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>React.js</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>JavaScript</p>
            </div>
            <div className='flex mt-3'>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>Bootstrap 5</p>
            <p className='px-2 text-sm font-bold bg-cyan-50 text-cyan-800 rounded-xl'>CSS</p>
            </div>
          </div>

          <div className='gap-5 flex mx-3'>
            <a href="https://portfolio-z4dn-oz3ohds90-anu-prems-projects.vercel.app/">
                    <button className='gap-1 bg-cyan-500 flex place-items-center flex justify-center rounded-md w-35 h-9 mt-5 hover:cursor-pointer text-white hover:bg-cyan-600 hover:-translate-y-[-3] delay-150 duration-300 hover:scale-110'><FaShareFromSquare />Live Demo</button>
                    </a>
                    <a href="https://github.com/AnuPrem2005/Portfolio">
                    <button className='gap-1 flex place-items-center flex justify-center rounded-md w-35 h-9 mt-5 border-2 border-solid border-cyan-500 me-3 text-cyan-500 hover:bg-cyan-500 cursor-pointer hover:text-white'><FiGithub />Code</button>
                    </a>
                    </div>

        </div>

      </div>

      <div data-aos="fade-up" className='flex justify-center'>
        <a href="https://github.com/AnuPrem2005">
      <button className='flex place-items-center rounded-md gap-2 text-sm mt-15 bg-black text-white font-bold p-4 hover:cursor-pointer text-white hover:-translate-y-1 delay-150 duration-300 hover:scale-110'><FiGithub />View All Projects On Github</button>
      </a>
      </div>

    </div>
  )
}

export default Projects
