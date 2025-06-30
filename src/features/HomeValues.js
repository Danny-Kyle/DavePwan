import React from 'react'
import { homeValuesImg } from "@/features/assets";

export const HomeValues = ({ title, mission, vision, coreValues }) => (
  <section className="relative h-[38rem] bg-cover bg-center py-20" style={{ backgroundImage: `url(${homeValuesImg.src})` }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative z-10  mx-auto px-4 text-center text-white">
      <div className="mb-6">
        <span className="inline-flex items-center text-red-600 text-sm font-semibold">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          Values
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-light mb-12">
        {title}
      </h2>
      
      <div className="max-w-4xl text-center mx-auto">
        
        <p className="text-2xl leading-relaxed text-center px-4 max-w-3xl mx-auto font-light mb-4">
            <span className="font-semibold">Our Vision: </span>{" "}
            {vision}
          </p>
        
        <p className="text-2xl leading-relaxed text-center px-4 max-w-3xl mx-auto font-light mb-4">
            <span className="font-semibold">Our Mission: </span>{" "}
            {mission}
          </p>
        
        <p className="text-2xl leading-relaxed text-center px-4 max-w-3xl mx-auto font-light mb-4">
            <span className="font-semibold">Core Values: </span>{" "}
            {coreValues}
          </p>
        
        
      </div>
    </div>
  </section>
);
