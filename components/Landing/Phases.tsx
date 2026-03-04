import React from 'react'
import PhaseCard from './PhaseCard'
import { phases } from '@/data/phases'

const Phases = () => {
  return (
    <section>
       <header className='mb-8'>
        <h2 className='font-bold text-2xl text-center mb-2'>Your 3-Phase Journey</h2>
        <p className='text-sm text-gray-500 text-center'>A comprehensive path from absolute beginner to production-ready developer</p>
       </header>

       <section className='flex max-lg:gap-4 p-10 flex-wrap justify-center lg:justify-between'>
        {
          phases.map(phase => (
            <PhaseCard key={phase.id} id={phase.id} header={phase.header} section={phase.sections} />
          ))
        }
        

       </section>
    </section>
  )
}

export default Phases