import React from 'react'

const Technology = () => {
  return (
    <section className='bg-slate-900 px-10 py-10 mt-30 mb-15 border-y-primary border-y-3'>
      <header className=' mb-10'>
        <h3 className='text-slate-300  tracking-wide text-center text-2xl'>Technologies You Will Master</h3>
      </header>

      <section className='flex gap-15 lg:gap-29 flex-wrap justify-center'>
        <p className='font-light tracking-widest text-white transition-colors duration-500 md:text-xl lg:text-2xl'>REACT</p>
        <p className='font-light tracking-widest text-white transition-colors duration-500  md:text-xl lg:text-2xl'>NODE.JS</p>
        <p className='font-light tracking-widest text-white transition-colors duration-500 md:text-xl lg:text-2xl'>TYPESCRIPT</p>
        <p className='font-light tracking-widest text-white transition-colors duration-500  md:text-xl lg:text-2xl'>TAILWIND</p>
        <p className='font-light tracking-widest text-white transition-colors duration-500  md:text-xl lg:text-2xl'>NEXT.JS</p>
        <p className='font-light tracking-widest text-white transition-colors duration-500  md:text-xl lg:text-2xl'>POSTGRESQL</p>
      </section>
    </section>
  )
}

export default Technology