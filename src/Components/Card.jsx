import React from 'react'

const Card = ({data}) => {
  return (
    <div>
      <div className=' w-[300px] bg-slate-400 border-2'>
        <p>{data.name}</p>
        <p>{data.industry}</p>
        <p>{data.location}</p>
        <div>
          <span>Founded: {data.founded}</span>
          <span>{data.employees} Employees</span>
        </div>
      </div>
    </div>
  )
}

export default Card