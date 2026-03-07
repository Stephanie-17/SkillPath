import RoadmapCard from '@/components/roadmap/RoadmapCard'
import React from 'react'

const Roadmap = () => {
  return (
    
    <main className='flex justify-center'>
      <div className='p-5 sm:p-10 max-w-6xl'>
         <header className='mb-10'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold mb-4'>Full Path <span className='text-primary'>Breakdown</span></h1>
        <p className='text-slate-400'>A step-by-step roadmap fro your first line of code to job-readiness. Master the essential skills of a modern Junior Web Developer</p>
      </header>

      <section className='flex flex-col gap-15'>
        <RoadmapCard />
        <RoadmapCard />
      </section>
      </div>
     
    </main>
  )
}

export default Roadmap