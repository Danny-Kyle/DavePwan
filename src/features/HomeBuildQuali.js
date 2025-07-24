// features/HomeBuildQuali.jsx
import React from 'react';
import Link from 'next/link';
import { HomeFeat } from './HomeFeat';

export const HomeBuildQuali = ({ images, title, description, features, buttonText, href }) => ( // 'href' prop is correctly received
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Images Section */}
        <div className="lg:w-1/2">
          <div className="relative flex gap-2 flex-row">
            {/* Small overlay image */}
            <div className="-mt-12 w-36 h-32">
              {/* <<< CORRECTED: Removed .src here >>> */}
              <img
                src={images.overlay}
                alt="Aerial View"
                className="w-[18rem] h-[21rem] object-cover rounded-b-full shadow-lg border-4 border-white"
              />
            </div>
            {/* Main large image */}
            <div className="relative">
              {/* <<< CORRECTED: Removed .src here >>> */}
              <img
                src={images.main}
                alt="Modern Building"
                className="w-[28rem] h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2">
          <div className="mb-4">
            <span className="text-sm font-semibold capitalize tracking-tight">
              About Us
            </span>
          </div>
          <h2 className="text-5xl font-semibold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="mb-8">
            <HomeFeat features={features} />
          </div>

          {/* This condition (buttonText && href) requires both to be truthy */}
          {buttonText && href && (
            <Link href={href} legacyBehavior>
              <a className="bg-[#FF0000] hover:bg-[#1D1D1D] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {buttonText}
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);