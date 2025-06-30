import Image from 'next/image';
import React from 'react';
import { propsBg, speak, seeLove } from './assets'; // Ensure these paths are correct and provide `src` property

const AboutImageGrid = () => {
  return (
    <div className="grid grid-cols-1 -mt-40 z-20 md:grid-cols-3 gap-4 my-6">

      {/* First Image (no overlay) */}
      <div className="relative h-[16em] w-[28rem] mb-2 overflow-hidden">
        <Image
          src={speak}
          alt="Speak Your Style"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Middle Image with Diagonal Overlay */}
      <div className="relative h-[16em] w-[28rem] mb-2 overflow-hidden group"> {/* Added 'group' for potential hover effects later */}
        <Image
          src={propsBg}
          alt="Properties Background"
          layout="fill"
          objectFit="cover"
        />

        {/* The Diagonal Overlay */}
        <div
          className="absolute inset-0 bg-blue-900 opacity-80" // Adjust color and opacity as needed
          style={{
            // This clip-path creates a polygon that covers the top-left portion diagonally.
            // Adjust the '40%' value to change the diagonal's steepness/position.
            // 0% 0% (top-left)
            // 100% 0% (top-right)
            // 60% 100% (point on the bottom edge) - This controls where the diagonal hits the bottom.
            // 0% 100% (bottom-left)
            clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)'
          }}
        ></div>

        {/* Optional: Add content on top of the overlay if needed */}
        <div className="absolute inset-0 flex items-center justify-center text-white p-4 z-10">
          {/* <p className="text-xl font-bold">Your Text Here</p> */}
        </div>
      </div>

      {/* Third Image (no overlay) */}
      <div className="relative h-[16em] w-[28rem] mb-2 overflow-hidden">
        <Image
          src={seeLove}
          alt="See Love Live It"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default AboutImageGrid;