import React from 'react'

const CTASection = () => {
  return (
    <aside className='px-6 flex justify-center items-center mt-30 mb-10 '>
      <div className='max-w-5xl bg-linear-to-b from-blue-500 to-blue-700 p-10 py-15 flex flex-col justify-center items-center rounded-2xl gap-7 shadow-lg shadow-primary'>
        <h2 className='font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center '>Ready to build your career path?</h2>
        <p className='text-sm text-white/70 text-center  lg:text-xl'>Join over 100+ students who have escaped tutorial hell and built real careers with tech</p>
        <div>
          <button className='px-10 py-3 bg-white text-primary font-semibold rounded-lg cursor-pointer'>Get Started for free</button>
        </div>
      </div>
    </aside>
  )
}

export default CTASection