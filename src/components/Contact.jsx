import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone,FaMapLocationDot,FaLinkedin,FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub,FaInstagramSquare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";



const Contact = () => {
  const maxChars = 500;
  const [text, setText] = useState("");
  return (
    <div id='contact' className='bg-gray-50 w-full pt-20 pb-20'>
      <div data-aos="fade-up">
      <h1 className='font-bold text-xl text-cyan-500 w-full flex place-content-center'>Get In Touch</h1>
      <h2 className='text-2xl font-bold text-gray-800 flex place-content-center mt-5'>Let's Work Together</h2>
      <p className='flex place-content-center text-lg text-center mt-5'>I'm always open to discussing new projects, creative ideas, or <br />opportunities to be part of your visions.</p>
      </div>

       <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
  justify-items-center mt-15 
  mx-5 md:mx-10 lg:mx-20 
  gap-6"
>
  {/* CONTACT INFO */}
  <div
    data-aos="fade-up"
    className="bg-white p-5 rounded-xl shadow-xl
    w-full sm:w-[90%] md:w-[420px] lg:w-[480px]
    min-h-[560px]
    hover:shadow-xl/20 hover:-translate-y-4
    delay-150 duration-300 overflow-hidden boxxx"
  >
    <h2 className="text-xl font-bold text-gray-800 flex place-content-start mt-5">
      Contact Information
    </h2>

    <div className="mt-5">
      <div className="flex place-content-start h-13">
        <div className="rounded-xl grid place-content-center bg-sky-100 w-13 h-13">
          <MdOutlineMail className="text-sky-600 text-4xl" />
        </div>
        <div>
          <p className="ms-3 opacity-75">Email</p>
          <a href="mailto:anupremj@gmail.com">
            <p className="ms-3 hover:cursor-pointer hover:text-cyan-600">
              anupremj@gmail.com
            </p>
          </a>
        </div>
      </div>

      <div className="flex place-content-start mt-5">
        <div className="rounded-xl grid place-content-center bg-emerald-50 w-13 h-13">
          <FaPhone className="text-emerald-500 text-4xl" />
        </div>
        <div>
          <p className="ms-3 opacity-75">Phone</p>
          <a href="tel:+919344717272">
            <p className="ms-3 hover:cursor-pointer hover:text-cyan-600">
              +91 93447 17272
            </p>
          </a>
        </div>
      </div>

      <div className="flex place-content-start mt-5">
        <div className="rounded-xl grid place-content-center bg-rose-50 w-13 h-13">
          <FaMapLocationDot className="text-rose-400 text-4xl" />
        </div>
        <div>
          <p className="ms-3 opacity-75">Location</p>
          <a href="https://www.google.com/maps/place/Nagercoil,+Tamil+Nadu">
            <p className="ms-3 hover:cursor-pointer hover:text-cyan-600">
              Nagercoil, India
            </p>
          </a>
        </div>
      </div>
    </div>

    <h2 className="text-lg font-bold text-gray-800 flex place-content-start mt-5">
      Follow Me
    </h2>

    <div className="mt-5 flex gap-5 flex-wrap">
      <a href="https://github.com/AnuPrem2005">
        <div className="rounded-xl grid place-content-center bg-black w-13 h-13 hover:-translate-y-1 duration-300 hover:scale-110">
          <FaGithub className="text-white text-4xl" />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/anu-prem">
        <div className="rounded-xl grid place-content-center bg-black w-13 h-13 hover:-translate-y-1 duration-300 hover:scale-110 hover:bg-blue-500">
          <FaLinkedin className="text-white text-4xl" />
        </div>
      </a>

      <a href="https://x.com/AnuPremJayaKum1">
        <div className="rounded-xl grid place-content-center bg-black w-13 h-13 hover:-translate-y-1 duration-300 hover:scale-110">
          <FaSquareXTwitter className="text-white text-4xl" />
        </div>
      </a>

      <a href="https://www.instagram.com/sucesful_loser">
        <div className="rounded-xl grid place-content-center bg-black w-13 h-13 hover:-translate-y-1 duration-300 hover:scale-110 hover:bg-red-500">
          <FaInstagramSquare className="text-white text-4xl" />
        </div>
      </a>
    </div>
  </div>

  {/* CONTACT FORM */}
  <div
    data-aos="fade-up"
    className="bg-white p-5 rounded-xl shadow-xl
    w-full sm:w-[90%] md:w-[420px] lg:w-[480px]
    min-h-[560px]
    hover:shadow-xl/20 hover:-translate-y-4
    delay-150 duration-300 overflow-hidden boxxx"
  >
    <h2 className="text-xl font-bold text-gray-800 flex place-content-start mt-5">
      Send Message
    </h2>

    <div className="mt-5 flex flex-col md:flex-row gap-5">
      <div className="w-full md:w-[48%]">
        <p>Full Name *</p>
        <input
          type="text"
          className="mt-2 w-full h-10 pl-2 border border-gray-400 rounded-md focus:border-2 focus:outline-none focus:border-cyan-500"
          placeholder="Your Full Name"
        />
      </div>

      <div className="w-full md:w-[48%]">
        <p>Email Address *</p>
        <input
          type="text"
          className="mt-2 w-full h-10 pl-2 border border-gray-400 rounded-md focus:border-2 focus:outline-none focus:border-cyan-500"
          placeholder="your.email@example.com"
        />
      </div>
    </div>

    <div className="mt-3">
      <p>Subject *</p>
      <input
        type="text"
        className="mt-2 w-full h-10 pl-2 border border-gray-400 rounded-md focus:border-2 focus:outline-none focus:border-cyan-500"
        placeholder="What's this about?"
      />
    </div>

    <div className="mt-3">
      <p>Message *</p>
      <textarea
        className="mt-2 w-full min-h-[160px] pl-2 pt-3 border border-gray-400 rounded-md focus:border-2 focus:outline-none focus:border-cyan-500"
        placeholder="Tell Me About Your Project or Idea..."
        maxLength={maxChars}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-sm mt-1 text-gray-500">
        {text.length} / {maxChars} characters
      </div>
    </div>

    <div className="flex justify-center">
      <button className="flex place-items-center justify-center rounded-md gap-2 text-sm mt-3 bg-cyan-500 text-white font-bold p-3 w-full hover:-translate-y-1 duration-300 hover:bg-cyan-600">
        <FiSend /> Send Message
      </button>
    </div>
  </div>
</div>



    </div>
  )
}

export default Contact
