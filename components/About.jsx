import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import { BsFillFilePersonFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='border-t flex flex-col h-[140vh] lg:h-screen text-white text-center gap-2'>
      <h1 className='text-xs mt-8'>Get to know more</h1>
      <h1 className='text-3xl font-sans2 shadow-2xl'>About Me</h1>
      <div className='flex items-center justify-center h-screen mt-16'>
        <div className='flex items-center justify-center gap-20 lg:gap-32 flex-col lg:flex-row'>
          <div className='flex items-center'>
            <img src="/assests/dev.png" alt="" className='w-72 md:w-96 ml-0 lg:ml-24 lg:w-full' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
              <div className='border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72'>
                <BsFillFilePersonFill />
                <h1 className='text-xl font-bold'>Experience</h1>
                <h1 className='text-xs text-gray-400'>Fresher</h1>
                <h1 className='text-xs text-gray-400'>Frontend Develoopment</h1>
              </div>
              <div className='border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72'>
                <FaBookReader />
                <h1 className='text-xl font-bold'>Education</h1>
                <h1 className='w-[70%] text-gray-400 text-xs'>Bsc(Science) Bachelors Degree</h1>
                <h1 className='w-[70%] text-gray-400 text-xs'>MCA Masters Degree</h1>
              </div>
            </div>
            <div className=' text-center mt-10 flex items-center justify-center'>
              <p className='text-xs md:text-sm text-center w-[60%] lg:w-[40%] text-gray-400'>
                I'm fresher and i don't have any work experience in any company now, but
                i've good understanding and knowledge in frontend development and also i've created many projects using React.js and next.js and for styling i'm using Tailwind css
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About