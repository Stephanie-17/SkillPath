import React from 'react'

const CTASection = () => {
  return (
    <aside className='px-6 flex justify-center items-center mt-10 mb-10'>
      <div className='max-w-5xl bg-primary p-10 py-15 flex flex-col justify-center items-center rounded-2xl gap-7 shadow-lg shadow-primary'>
        <h2 className='font-bold text-3xl sm:text-4xl text-center '>Ready to build your career path?</h2>
        <p className='text-sm text-white/70 text-center '>Join 50,000+ professionals who have successfully naviagted their career transition using our data-backed roadmaps</p>
        <div>
          <button className='px-10 py-3 bg-white text-primary font-semibold rounded-lg cursor-pointer'>Get Started for free</button>
        </div>
      </div>
    </aside>
  )
}

export default CTASection