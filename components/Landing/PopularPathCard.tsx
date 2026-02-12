
import React from 'react'

interface PopularPathCardProps {
  iconPath: string,
  pathName: string,
  description: string,
  whyItsPopular: string,
  textColorOfWhyItsPopular: string,
  benefit: string
}
const PopularPathCard = ({ pathName, description, whyItsPopular, textColorOfWhyItsPopular, benefit}: PopularPathCardProps) => {
  return (
    <div className='group bg-background flex flex-col  p-5 sm:w-75 h-70 rounded-lg border border-white/20 '>
      <div className='bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white w-12 p-2 mb-6'>icon</div>
      <div className='card-text mb-10'>
         <h3 className='text-2xl font-bold mb-3'>{pathName}</h3>
         <p className='text-gray-500 text-sm'>{description}</p>
      </div>
      <hr />
      <div className='flex justify-between mt-5'>
        <p className={`text-${textColorOfWhyItsPopular}-500 text-xs md:text-sm`}>{whyItsPopular}</p>
        <p className='text-gray-600 text-xs md:text-sm'>{benefit}</p>
      </div>
    </div>
  )
}

export default PopularPathCard