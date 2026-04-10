import DashboardHeader from '@/components/dashboard/DashboardHeader'
import LearningSequence from '@/components/dashboard/LearningSequence'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='p-5 flex justify-center'>
      <section className='w-full max-w-7xl'>
          <DashboardHeader />
          <LearningSequence />
      </section>
      
    </main>
  )
}

export default Dashboard