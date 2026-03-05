import React from 'react'

const Technology = () => {
  return (
    <section className='bg-slate-900 px-10 py-10 mt-10'>
      <header className='sm:mb-7 mb-10'>
        <h3 className='text-slate-500 font-semibold tracking-wide text-center text-2xl'>Technologies You Will Master</h3>
      </header>

      <section className='flex gap-15 flex-wrap justify-center'>
        <p className='font-light tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-500 text-2xl'>REACT</p>
        <p className='font-light tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-500  text-2xl'>NODE.JS</p>
        <p className='font-light tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-500  text-2xl'>TYPESCRIPT</p>
        <p className='font-light tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-500  text-2xl'>TAILWIND</p>
        <p className='font-light tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-500  text-2xl'>NEXT.JS</p>
        <p className='font-light tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-500  text-2xl'>POSTGRESQL</p>
      </section>
    </section>
  )
}

export default Technology