import React from 'react'

const PropFeaturesCard = ({title, style}) => {
  return (
    <div className="bg-center bg-cover h-64 rounded-sm flex flex-col justify-center p-4" style={style}>
      <h3 className="text-white text-center font-semibold text-3xl max-w-sm mx-auto">{title}</h3>
    </div>
  )
}

export default PropFeaturesCard