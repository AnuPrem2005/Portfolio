import React from 'react'
import Abbout from '../assets/About.jpg'

const About = () => {
  return (
    <div id='about' className='pt-20'>
      <h1 className='font-bold text-xl text-cyan-500 w-full flex place-content-center mt-5'>About me</h1>
      <div className='lg:grid grid-cols-2 sm:grid grid-cols-1 md:grid grid-cols-2'>
        <div data-aos="fade-up" className='relative place-items-center mt-12 me-7'>

          <img src={Abbout} alt="item" className='w-100 h-70 rounded-lg' />

        </div>
        <div data-aos="fade-up" className='mt-10 lg:place-items-start md:place-items-start sm:text-center'>
          <h2 className='text-3xl font-bold text-gray-800 sm: me-full text-center'>Passionate Developer & <br /> Lifelong Learner</h2>
          <p className=' text-lg lg:me-40 mt-3 md:me-40 mt-3 sm:me-full mt-3 text-center'>I'm <b>Anu Prem</b>, currently pursuing B.E. CSE at  <b className='text-cyan-500'>Stella Mary's College</b>. In addition to my studies, I'm doing a React.js course where I learned React.js, HTML, CSS, Bootstrap, Tailwind CSS, MUI, and Redux.</p>
          <p className='lg:me-40 mt-3 md:me-40 mt-3 sm:me-full mt-3 text-center'>I'm a self-motivated person who loves <b>editing, driving, biking with friends</b>, and <b>exploring new places</b>. When I'm not coding, you'll find me discovering new technologies or enjoying adventures with my friends</p>
          <div className='lg:w-135 h-1 bg-gray-100 mt-5 sm:w-full h-1 bg-gray-100 mt-5 md:w-full h-1 bg-gray-100 mt-5'></div>
          <div className='grid grid-cols-3 w-full'>
            <div className='place-items-center lg:me-40 mt-5 md:me-40 mt-5 sm:me-full'>
              <h1 className='font-bold text-cyan-500'>8+</h1>
              <p>Technologies</p>
            </div>
            <div className='place-items-center lg:me-40 mt-5 md:me-40 mt-5 sm:me-full'>
              <h1 className='font-bold text-cyan-500'>3</h1>
              <p>Projects</p>
            </div>
            <div className='place-items-center lg:me-40 mt-5 md:me-40 mt-5 sm:me-full'>
              <h1 className='font-bold text-cyan-500'>100%</h1>
              <p>Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
