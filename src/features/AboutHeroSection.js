import React from 'react'
import { aboutBg } from './assets'

const AboutHeroSection = ({ title, description }) => {
  return (
     <section className="bg-center -mt-18 bg-cover h-[42rem] flex items-center justify-center"
     style={{ backgroundImage: `url(${aboutBg.src})`}}>
      <div className="absolute inset-0 h-[37.5rem] bg-black opacity-40"></div>
      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-white">{title}</h1>
        <p className="text-white text-xl mt-2">{description}</p>
      </div>
    </section>
  )
}

export default AboutHeroSection