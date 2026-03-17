import CTASection from '@/components/Landing/CTASection'
import RoadmapCard from '@/components/roadmap/RoadmapCard'
import { roadmap } from '@/data/roadmap'
import React from 'react'
import { MdRocketLaunch } from 'react-icons/md'

const Roadmap = () => {
  return (
    
    <main className='flex justify-center flex-col'>
      <div className='p-5 sm:p-10 max-w-6xl'>
         <header className='mb-10'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold mb-4'>Full Path <span className='text-primary'>Breakdown</span></h1>
        <p className='text-slate-400'>A step-by-step roadmap fro your first line of code to job-readiness. Master the essential skills of a modern Junior Web Developer</p>
      </header>

      <section className='flex flex-col gap-15'>
       {
        roadmap.map(map=> (
             <RoadmapCard key={map.id} phase={map.id} timeline={map.timeline}  header={map.header} desc={map.description}  coreSkills ={map.coreSkills} outcome={map.outcome}/>
        ))
       }


       <article className="grid grid-cols-[40px_1fr] gap-4 pb-3">
            {/* decorative line */}
            {/* icon */}
            <div className="relative ">
              <div className="bg-primary/30 h-10 flex justify-center items-center w-10 rounded-full ">
                <MdRocketLaunch className="text-3xl text-center text-primary" />
              </div>
              {/*main line */}
              <div className="w-0.5 h-[calc(100%+2rem)] bg-linear-to-b from-[#137fec] to-[#233648] text-slate-800 absolute top-0 left-5 -z-1">
                .
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-bold mb-2'>Job Ready</h2>
              <p className='text-gray-400 text-sm font-medium'>Portfolio complete and ready for the market.</p>
            </div>
            </article>
        
        
      </section>
      </div>
     

     <CTASection/>
    </main>
  )
}

export default Roadmap