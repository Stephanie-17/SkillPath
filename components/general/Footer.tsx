import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear()
  return (
    <footer className=' mb-3 pt-20 px-10'>
       <hr className='text-gray-800' />
      <section className='grid grid-cols-1 sm:grid-cols-2 py-20 gap-10' >
         <div>
        <h2 className='font-bold text-xl mb-5'>SkillPath</h2>
        <p className='text-gray-500'>Discover the skills that matter. Data-backed career guidance for the modern workforce</p>
      </div>
      <div>
        <h2 className='font-extrabold text-gray-600'>QUICK LINKS</h2>
        <Link
					className='relative pb-2 transition-colors duration-500   cursor-pointer text-gray-600 hover:text-primary'
					href={"/"}
				>
					<p className="font-medium">Home</p>
				</Link>
				<Link
					className='relative pb-2 transition-colors duration-500   cursor-pointer text-gray-600 hover:text-primary '
					href={"/"}
				>
					<p className="font-medium">Explore</p></Link>
      </div>
      </section>
       <hr className='text-gray-800' />
       <section className='mt-5'>
        <p className='text-xs text-center text-gray-600 '>
           &copy; {currentYear} SkillPath. All rights reserved. Built with data, precision and 💙
        </p>
       
       </section>
     
    </footer>
  )
}

export default Footer