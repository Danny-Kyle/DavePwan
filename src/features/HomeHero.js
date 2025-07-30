import React from "react";
import Link from 'next/link'; // <<< Import Link from next/link
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
  // Added 'relative' to the parent div so the absolute overlay is positioned correctly
  <div
    className="h-[46rem] -mt-18 bg-cover bg-center relative"
    style={{ backgroundImage: `url(${homeBg.src})` }}
  >
    {/* Overlay: Changed height to 'inset-0' to cover the whole parent,
        and increased opacity to 'opacity-60' for better contrast.
        Adjust opacity-60 to opacity-50 or opacity-70 if you want it lighter/darker. */}
    <div
      className="absolute inset-0 bg-black opacity-60"
      aria-hidden="true"
    ></div>

    <div className="relative flex items-center h-full">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white">
          {/* Added 'relative z-10' to ensure text is always above the overlay */}
          <h1 className="text-7xl md:text-6xl font-semibold mb-6 leading-tight relative z-10">
            {title}
          </h1>
          {description && <p className="text-lg mb-8 relative z-10">{description}</p>}

          {/* Conditional rendering: Only show the button if ctaButton and its href exist */}
          {ctaButton && ctaButton.href && (
            // <<< Changed from <button> to <Link> for navigation >>>
            <Link href={ctaButton.href} legacyBehavior>
              <a className="bg-white hover:bg-red-700 text-black px-3 py-3 rounded-lg text-lg font-semibold inline-flex items-center relative z-10">
                {ctaButton.text}
                <span className="ml-3 bg-red-600 p-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out">
                  <ArrowRightUpIcon className="w-5 h-5 text-white" />
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);