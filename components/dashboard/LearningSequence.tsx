import React from 'react'
import { MdAltRoute} from 'react-icons/md'
import LearningSequenceCard from './LearningSequenceCard'

const LearningSequence = () => {
  return (
    <section className='mt-5'>
      <header className='flex items-center gap-2'>
        <MdAltRoute  className='text-primary text-3xl '/>
        <h3 className='font-bold text-2xl'>Learning Sequence</h3>
      </header>

      <section>
        <LearningSequenceCard />
      </section>
    </section>
  )
}

export default LearningSequence