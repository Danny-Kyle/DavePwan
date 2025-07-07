import React from 'react'

const PropPropertiesCard = ({title, location}) => {
  return (
    <div className="bg-white rounded shadow p-3 md:p-4 max-w-xs sm:max-w-sm md:w-[22rem] w-full h-auto min-h-32 flex flex-col justify-center">
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{location}</p>
      <a className="text-red-600 font-semibold mt-2" href="#">
        See more
      </a>
    </div>
  )
}

export default PropPropertiesCard