import React from 'react'
import Abbout from '../assets/About.jpg'

const About = () => {
  return (
    <div id="about" className="pt-20">
  <h1 className="font-bold text-xl text-cyan-500 w-full flex justify-center mt-5">
    About me
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    
    {/* IMAGE SECTION */}
    <div
      data-aos="fade-up"
      className="relative flex justify-center mt-12 
      sm:mx-auto md:me-7 lg:me-7"
    >
      <img
        src={Abbout}
        alt="item"
        className="w-[90%] sm:w-[80%] md:w-100 h-70 rounded-lg"
      />
    </div>

    {/* CONTENT SECTION */}
    <div
      data-aos="fade-up"
      className="mt-10 
      text-center 
      sm:px-5 
      md:px-0 
      lg:px-0"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Passionate Developer & <br /> Lifelong Learner
      </h2>

      <p className="text-lg mt-3 text-center sm:px-2 md:px-0">
        I'm <b>Anu Prem</b>, currently pursuing B.E. CSE at{" "}
        <b className="text-cyan-500">Stella Mary's College</b>. In addition to my
        studies, I'm doing a React.js course where I learned React.js, HTML, CSS,
        Bootstrap, Tailwind CSS, MUI, and Redux.
      </p>

      <p className="mt-3 text-center sm:px-2 md:px-0">
        I'm a self-motivated person who loves <b>editing, driving, biking with
        friends</b>, and <b>exploring new places</b>. When I'm not coding, you'll
        find me discovering new technologies or enjoying adventures with my
        friends
      </p>

      {/* DIVIDER */}
      <div className="w-full h-1 bg-gray-100 mt-5"></div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-3 w-full mt-5 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-cyan-500">8+</h1>
          <p>Technologies</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-cyan-500">3</h1>
          <p>Projects</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-cyan-500">100%</h1>
          <p>Dedication</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About
