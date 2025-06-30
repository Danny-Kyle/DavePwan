import React from 'react'

export const HomeFeat = ({ features }) => (
  <ul className="space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start">
        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <span className="text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>
);
