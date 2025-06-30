import React from 'react'

export const HomeNav = ({ logo, menuItems, ctaButton }) => (
  <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="text-red-600 text-2xl font-bold">
          {logo}
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="text-white hover:text-red-300 transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            {ctaButton}
          </button>
        </div>
      </div>
    </div>
  </nav>
);
