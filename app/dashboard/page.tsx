import DashboardHeader from '@/components/dashboard/DashboardHeader'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='p-5 flex justify-center'>
      <section className='w-full max-w-7xl'>
          <DashboardHeader />
      </section>
      
    </main>
  )
}

export default Dashboard