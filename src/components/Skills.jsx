import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <div id='skills' className='bg-gray-50 mt-20 w-full pt-20 pb-20'>
      <div data-aos="fade-up">
      <h1 className='font-bold text-xl text-cyan-500 w-full flex place-content-center'>My Skills</h1>
      <h2 className='text-2xl font-bold text-gray-800 flex place-content-center mt-5'>Technologies I Work With</h2>
      <p className='flex place-content-center text-lg text-center mt-5'>I specialize in modern web development technologies with a focus on <br /> creating beautiful and functional user experiences.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mx-auto mt-10 px-4">


        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-sky-100 w-15 h-15'><FaReact className='text-sky-600 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>React.js</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[90%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>90%</p>

        </div>

        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-yellow-50 w-15 h-15'><IoLogoJavascript className='text-yellow-400 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>JavaScript</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[85%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>85%</p>

        </div>
        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-orange-50 w-15 h-15'><FaHtml5 className='text-orange-500 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>HTML</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[95%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>95%</p>

        </div>
        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-sky-100 w-15 h-15'><FaCss3 className='text-sky-600 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>CSS</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[90%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>90%</p>

        </div>
        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-emerald-50 w-15 h-15'><RiTailwindCssFill className='text-emerald-500 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>Tailwind CSS</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[88%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>88%</p>

        </div>
        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-violet-50 w-15 h-15'><FaBootstrap className='text-violet-500 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>Bootstrap</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[80%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>80%</p>

        </div>
        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-blue-100 w-15 h-15'><SiMui className='text-blue-600 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>MUI</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[75%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>75%</p>

        </div>
        <div data-aos="zoom-in" className='gap-2 grid place-content-center bg-white rounded-xl shadow-xl w-70 h-50 hover:cursor-pointer hover:shadow-xl/20 boxx'>
          <div className='flex justify-center'>
            <div className='rounded-xl grid place-content-center bg-purple-50 w-15 h-15'><SiRedux className='text-purple-500 text-4xl' /></div>
          </div>
          <h1 className='font-bold flex place-content-center'>Redux</h1>

          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-sky-500 h-2 rounded-full w-[70%]"></div>
          </div>

          <p className='text-sm opacity-75 flex justify-center'>70%</p>

        </div>
      </div>
       
      <div data-aos="fade-up" className='flex justify-center'>
        <div className='mt-20 grid justify-items-center place-content-center bg-white rounded-xl shadow-xl w-100 h-40 gap-5'>
          <h1 className='font-bold'>Always Learning & Growing</h1>
          <p className='text-center opacity-75'>I'm constantly exploring new technologies and improving my skills to stay updated with the latest trends in web development.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
