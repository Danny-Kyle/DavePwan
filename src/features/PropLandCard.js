import Image from 'next/image'
import React from 'react'

const PropLandCard = ({title, description, imageAlt, imageSrc}) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 flex flex-col md:flex-row">
      {/* Left Placeholder Image */}
      <Image alt={imageAlt} src={imageSrc} className='w-full md:w-1/2 h-[30rem]'/>
      {/* Right Content */}
      <div className="md:ml-6 flex flex-col justify-center items-center flex-1 mt-4 md:mt-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex flex-col gap-4 space-x-3">
          <button className="bg-red-600 text-white rounded px-4 py-2">
            Download Subscription Form
          </button>
          <button className="border border-gray-600 rounded px-4 py-2">
            Learn More
          </button>
        </div>
      </div>
    </div>

  )
}

export default PropLandCard