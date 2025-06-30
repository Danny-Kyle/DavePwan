import React from 'react'
import { aboutBg } from './assets'

const AboutHeroSection = ({ title, description }) => {
  return (
     <section className="bg-center -mt-18 bg-cover h-[42rem] flex items-center justify-center"
     style={{ backgroundImage: `url(${aboutBg.src})`}}>
      <div className="text-center">
        <h1 className="text-7xl font-semibold text-white">{title}</h1>
        <p className="text-white mt-2">{description}</p>
      </div>
    </section>
  )
}

export default AboutHeroSection