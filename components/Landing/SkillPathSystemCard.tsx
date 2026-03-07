import React from 'react'
import Image from 'next/image'
interface SkillPathSystemCard {
  iconPath: string,
  iconAltText: string,
  process: string,
  id:number,
  desc: string
}
const SkillPathSystemCard = ({iconPath, iconAltText, id, process,desc}:SkillPathSystemCard) => {
  return (
    <article className='group flex flex-col gap-5 items-center max-w-80'>
     <div className='bg-slate-800 border-2 border-blue-500 flex justify-center p-3 w-14 h-14 rounded-xl group-hover:bg-primary transition-discrete duration-500'>
       <Image src={iconPath} width={34} height={24} alt={iconAltText} />
     </div>

     <div>
      <h3 className='text-lg font-semibold text-center'>{id}. {process}</h3>
     </div>

     <p className='text-sm text-center text-slate-400'>
      {desc}
     </p>

    </article>
  )
}

export default SkillPathSystemCard