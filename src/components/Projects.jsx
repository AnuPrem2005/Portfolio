import React from 'react'
import Bkrs from '../assets/caro1.jpg'
import Watch from '../assets/img1.webp'
import Port from '../assets/Portfolio.PNG'
import Excellence from '../assets/Excellence.png'
import AgriChatBox from '../assets/AgriChatBox.png'
import { FaShareFromSquare } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id='projects' className='w-full pt-20 pb-20 bg-slate-50'>
      <div data-aos='fade-up' className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-xl font-bold text-cyan-500'>My Work</h1>
          <h2 className='mt-5 text-2xl font-bold text-gray-800'>Featured Projects</h2>
          <p className='mx-auto mt-5 max-w-2xl text-center text-lg text-gray-600'>
            Here are some of my recent projects that showcase my skills in React.js and modern web development technologies.
          </p>
        </div>

        {/* ✅ gap-6 → gap-x-6 gap-y-10 for more row spacing */}
        <div className='mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          <article data-aos='zoom-in' className='group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-4 hover:shadow-2xl'>
            <div className='h-56 overflow-hidden rounded-t-xl'>
              <img src={AgriChatBox} alt='Agrichatbox project' className='h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105' />
            </div>
            <div className='p-6'>
              <h3 className='text-lg font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-cyan-600'>
                AgriChatBox Final Year Project
              </h3>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                A college final-year web app built with React and Tailwind CSS for frontend, with a backend stack using Express, Node.js, MongoDB, Python, and ML.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 text-sm font-semibold text-cyan-800'>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>React.js</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Tailwind CSS</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Express</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>MongoDB</span>
              </div>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <a href='https://agrichatbox.vercel.app/' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-600'>
                    <FaShareFromSquare /> Live Demo
                  </button>
                </a>
                <a href='https://github.com/AnuPrem2005/Agrichatbox-code' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-white px-4 py-3 text-sm font-bold text-cyan-500 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white'>
                    <FiGithub /> Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article data-aos='zoom-in' className='group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-4 hover:shadow-2xl'>
            <div className='h-56 overflow-hidden rounded-t-xl'>
              <img src={Excellence} alt='Excellence College website' className='h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105' />
            </div>
            <div className='p-6'>
              <h3 className='text-lg font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-cyan-600'>
                Excellence College Website
              </h3>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                A modern college website built with React and Tailwind CSS, featuring clean pages, responsive layout, and polished UI for student and campus information.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 text-sm font-semibold text-cyan-800'>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>React.js</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Tailwind CSS</span>
              </div>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <a href='https://excellence-college.vercel.app/' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-600'>
                    <FaShareFromSquare /> Live Demo
                  </button>
                </a>
                <a href='https://github.com/AnuPrem2005/Excellence-College' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-white px-4 py-3 text-sm font-bold text-cyan-500 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white'>
                    <FiGithub /> Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article data-aos='zoom-in' className='group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-4 hover:shadow-2xl'>
            <div className='h-56 overflow-hidden rounded-t-xl'>
              <img src={Port} alt='Portfolio project' className='h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105' />
            </div>
            <div className='p-6'>
              <h3 className='text-lg font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-cyan-600'>
                Portfolio Website
              </h3>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                A personal portfolio website built using HTML, Tailwind CSS, React, and JavaScript to showcase projects, skills, and a clean, responsive user interface.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 text-sm font-semibold text-cyan-800'>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Tailwind CSS</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>React.js</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>JavaScript</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Bootstrap 5</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>CSS</span>
              </div>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <a href='https://portfolio-lac-eta-52.vercel.app/' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-600'>
                    <FaShareFromSquare /> Live Demo
                  </button>
                </a>
                <a href='https://github.com/AnuPrem2005/Portfolio' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-white px-4 py-3 text-sm font-bold text-cyan-500 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white'>
                    <FiGithub /> Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article data-aos='zoom-in' className='group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-4 hover:shadow-2xl'>
            <div className='h-56 overflow-hidden rounded-t-xl'>
              <img src={Bkrs} alt='Bakery project' className='h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105' />
            </div>
            <div className='p-6'>
              <h3 className='text-lg font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-cyan-600'>
                Delicious Bakes Made with Love
              </h3>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                A responsive frontend website developed for a bakery brand, emphasizing UI design, layout responsiveness, and user experience using modern web technologies.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 text-sm font-semibold text-cyan-800'>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>React.js</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Bootstrap 5</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>CSS</span>
              </div>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <a href='https://anuprem2005.github.io/Ayra-Bakers/' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-600'>
                    <FaShareFromSquare /> Live Demo
                  </button>
                </a>
                <a href='https://github.com/AnuPrem2005/Ayra-Bakers' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-white px-4 py-3 text-sm font-bold text-cyan-500 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white'>
                    <FiGithub /> Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          <article data-aos='zoom-in' className='group overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-4 hover:shadow-2xl'>
            <div className='h-56 overflow-hidden rounded-t-xl'>
              <img src={Watch} alt='Watch store project' className='h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105' />
            </div>
            <div className='p-6'>
              <h3 className='text-lg font-bold text-gray-900 transition-colors duration-700 ease-in-out group-hover:text-cyan-600'>
                Watch Store Frontend Design
              </h3>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                A responsive watch website designed using HTML, CSS, and Bootstrap, featuring a clean layout, product-focused UI, and smooth user experience across all devices.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 text-sm font-semibold text-cyan-800'>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>HTML</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>Bootstrap 5</span>
                <span className='rounded-full bg-cyan-50 px-3 py-1'>CSS</span>
              </div>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <a href='https://anuprem2005.github.io/Timex/' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-600'>
                    <FaShareFromSquare /> Live Demo
                  </button>
                </a>
                <a href='https://github.com/AnuPrem2005/Timex' className='w-full sm:w-auto'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-white px-4 py-3 text-sm font-bold text-cyan-500 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-white'>
                    <FiGithub /> Code
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>

        <div data-aos='fade-up' className='mt-12 flex justify-center'>
          <a href='https://github.com/AnuPrem2005'>
            <button className='flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
              <FiGithub /> View All Projects On Github
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects