import React from 'react'

const Card = ({data}) => {
  return (
    <div>
      <div className=' bg-yinmnBlue hover:bg-silverLakeBlue transition-all duration-200 break-words flex flex-col h-[250px] hover:scale-105 
         hover:border-2 hover:border-RichBlack ease-in '>
        <p className='font-Montserrat font-semibold text-4xl text-Platinum px-2 py-2 text-center '>{data.name}</p>
        <p className='font-Montserrat font-normal text-2xl text-Platinum px-2 py-2 text-center'>{data.industry}</p>
        <p className='font-Montserrat font-normal text-2xl text-Platinum px-2 py-2 text-center'>{data.location}</p>
        <div className=' font-Montserrat p-5 flex justify-between'>
          <span> <span className=' font-semibold italic'>Founded </span><span className='font-semibold text-Platinum'>{data.founded}</span></span>
          <span> <span className=' font-semibold text-Platinum'>{data.employees}</span><span className='font-semibold italic'> Employees</span></span>
        </div>
      </div>
    </div>
  )
}

export default Card