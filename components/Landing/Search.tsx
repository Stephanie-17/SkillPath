import React from 'react'
import { FaSearch } from 'react-icons/fa'
const Search = () => {
  return (
    <div className='flex items-center justify-between border border-white/10 gap-2 sm:w-[80%] bg-white/5 backdrop-blur-sm shadow-2xl px-2 py-2 rounded-lg lg:w-[60%]'>
     <FaSearch/>
     <input className='placeholder-shown:text-sm  focus:outline-none sm:w-[70%] p-0 h-5' type="text" placeholder="Search for a skill or career goal (e.g 'Data Scientist')" />
     <button className='font-bold bg-primary  rounded-lg cursor-pointer focus:outline-1 w-32 h-10 lg:w-40'>Explore Paths</button>
    </div>
  )
}

export default Search