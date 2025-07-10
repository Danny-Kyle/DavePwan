import React from "react";
import { homeBg } from "./assets";

const ArrowRightUpIcon = ({ className }) => (
  <svg
    data-slot="icon"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" // Indicate to screen readers that this is decorative
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
  </svg>
);

export const HomeHero = ({ title, subtitle, description, ctaButton }) => (
  <div
    className="h-[46rem] -mt-18 bg-cover  bg-center"
    style={{ backgroundImage: `url(${homeBg.src})` }}
  >
    <div
      className="absolute inset-0 h-[41.5rem] bg-black opacity-40"
      aria-hidden="true"
    ></div>

    <div className="relative flex items-center h-full">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-7xl md:text-6xl font-semibold mb-6 leading-tight">
            {title}
          </h1>
          {description && <p className="text-lg mb-8">{description}</p>}
          {ctaButton && (
            <button className="bg-white hover:bg-red-700 text-black px-4 py-3 rounded-lg text-lg font-semibold flex items-center">
              {ctaButton.text}
              <span className="ml-3 bg-red-600 p-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out">
              <ArrowRightUpIcon className="w-5 h-5 text-white" /> 
            </span>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);
