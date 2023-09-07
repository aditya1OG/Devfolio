import React from 'react'

const Skills = () => {
  return (
    <div className='border-t h-screen text-white flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col text-center gap-4'>
        <h1 className='text-[38px] md:text-[48px] font-sans2'>My Skills & Knowledge</h1>
        <h1 className='text-lg md:text-xl font-poppines2  '>Technologies and languages that I use to make my projects everyday</h1>
      </div>
      <div className='mt-10 grid grid-cols-3 md:grid-cols-4 place-items-center gap-16'>
        <img src="/assests/html.svg" alt="" className='w-20 h-20' />
        <img src="/assests/css.svg" alt="" className='w-20 h-20' />
        <img src="/assests/javascript.svg" alt="" className='w-20 h-20' />
        <img src="/assests/bootstrap.svg" alt="" className='w-20 h-20' />
     
        <img src="/assests/nextjs.svg" alt="" className='w-20 h-20' />
        <img src="/assests/react.svg" alt="" className='w-20 h-20' />
        <img src="/assests/tailwindcss.svg" alt="" className='w-20 h-20' />
        <img src="/assests/sass.svg" alt="" className='w-20 h-20' />
      </div>
    </div>
  )
}

export default Skills