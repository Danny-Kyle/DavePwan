import React from 'react'

export const HomeExp = ({ image, title, description, layout = "left", textOverlay = false }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-80 object-cover relative"
    />
    <div className={`absolute inset-0 bg-black opacity-60 flex items-end ${textOverlay ? 'justify-center' : ''}`}>
      <div className={`p-6 relative text-white ${textOverlay ? 'text-center' : ''} ${layout === 'right' ? 'ml-auto max-w-xs' : 'max-w-sm'}`}>
        <h3 className="md:text-2xl text-lg relative font-semibold mb-4">{title}</h3>
        <p className="md:text-sm text-xs font-light relative leading-relaxed">
          {description}
        </p>
      </div>
    </div>
    {layout === 'right' && (
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-270">
        <p className="text-blue-200 text-xl font-light tracking-wider">
          With years of experience.<br />
          We are ready to help you.
        </p>
      </div>
    )}
  </div>
);
