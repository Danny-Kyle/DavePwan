import React from 'react'

export const HomeDiscover = ({ title, subtitle, description }) => (
  // <section className="pt-16 bg-gray-50">
  //   <div className="container mx-auto px-4 text-center">
  <section className="py-12 md:py-16 bg-gray-50">
     <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
      <div className="mb-4">
        <span className="inline-flex items-center text-black text-sm font-semibold">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          Discover
        </span>
      </div>
      {/* <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6"> */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4 sm:mb-6 leading-tight">
        {title}
      </h2>
      {/* <div className="max-w-3xl leading-tight mx-auto"> */}
      <div className="max-w-3xl mx-auto px-2">
        {/* <p className="text-lg text-gray-600">{subtitle}</p> */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  </section>
);
