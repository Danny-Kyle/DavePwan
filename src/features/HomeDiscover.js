import React from 'react'

export const HomeDiscover = ({ title, subtitle, description }) => (
  <section className="pt-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-4">
        <span className="inline-flex items-center text-black text-sm font-semibold">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          Discover
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
        {title}
      </h2>
      <div className="max-w-3xl leading-tight mx-auto">
        {/* <p className="text-lg text-gray-600 mb-2">{subtitle}</p> */}
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
    </div>
  </section>
);
