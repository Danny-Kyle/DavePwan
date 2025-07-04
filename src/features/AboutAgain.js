import React from 'react'
import Image from 'next/image';
import { propsBg } from './assets'; 

export const AboutAgain = () => {
  return (
    // <section className="relative bg-gray-100 mb-28 py-16 md:py-24 overflow-hidden">
    //   <div
    //     className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-800"
    //     style={{
    //       // This clip-path creates a polygon that covers the bottom-right part of the section diagonally.
    //       // This specific clip-path is for the *section's* background, not an overlay on an image.
    //       // Adjust to match the screenshot's diagonal cut on the overall section if desired.
    //       // For the *section's* diagonal background:
    //       // The image shows the blue background covering the bottom 2/3 of the page,
    //       // with a diagonal cut that goes from top-left to bottom-right, revealing gray at the top-left corner.
    //       // Let's assume the diagonal is part of the section background.
    //       // If you want the blue part to be the *bottom-right* and cut diagonally from top-left
    //       // This would mean a polygon like:
    //       // `polygon(0% 100%, 100% 100%, 100% 0%, 50% 0%)` - no, this is not it.
    //       // The screenshot shows the blue background filling the bottom-right portion of the overall section.
    //       // The grey background is on the top-left, cutting diagonally.
    //       // Let's make the blue the main background and the grey a clipped overlay on top.

    //       // Simplified approach: make the section itself blue, and position a gray triangle
    //       // OR, based on the image, the blue *is* the background of this section,
    //       // and the grey is above it, cutting diagonally.
    //       // Let's go with the blue background for the section, and then add content on top.
    //       // The diagonal seems to be for the whole section background.
    //       // We can apply it to the section itself or a pseudo-element.
    //       // For simplicity, let's keep the section's background straightforward
    //       // and apply the diagonal directly to the inner layout of content if needed.
    //       // The image shows a dark blue section with a lighter blue diagonal separating content areas.
    //       // This suggests a background div for the section, and then a lighter blue overlay.

    //       // Let's re-evaluate based on the visual. The `Who We Are` section has a dark blue BG.
    //       // Then there's a white area for the image and text, with a blue diagonal *behind* it.
    //       // This implies the diagonal is a background shape, NOT an overlay on the image itself.
    //       // The image background appears dark blue, then lighter blue diagonal shape.

    //       // For the background effect shown in the screenshot:
    //       // It's a dark blue background for the whole section.
    //       // There's a lighter blue triangular/quadrilateral shape that forms the diagonal.
    //       // Let's create two background layers for this section.
    //     }}
    //   >
    //     <div
    //       className="absolute inset-0 w-full"
    //       style={{
    //         // This clip-path attempts to mimic the diagonal shape of the *lighter blue* background area
    //         // from the screenshot. This is an educated guess on the polygon points.
    //         // Adjust the percentages to fine-tune the diagonal's position and steepness.
    //         // Points (clockwise): Top-left, point on top edge, bottom-right, point on bottom edge
    //         // This shape seems to cut across the content area.
    //         // Let's instead use a single background color for the section and apply
    //         // the diagonal to the image's container, as per the earlier question.
    //         // The image in the prompt for this specific part shows a dark blue background
    //         // for the whole section, with a lighter blue diagonal *within* that dark blue.

    //         // Given the complexity of the precise background diagonal in the image,
    //         // which seems to be a layered effect, it's easier to focus on the
    //         // image overlay part for now, and manage the background separately.

    //         // For the background effect from the screenshot, it's likely a div that's
    //         // absolutely positioned within the section, with its own clip-path or skew transformation.
    //         // For example:
    //         // background-color for the section: dark-blue
    //         // <div className="absolute inset-0 bg-blue-700" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
    //         // This would be a triangle. The screenshot has a more complex shape.
    //         // Let's keep the section background simple and focus on the image.
    //       }}
    //     >
            
    //     </div>
    //   </div>

      
    //   <div className="container justify-center items-center mx-auto scale-110 relative z-10"> 
    //     <div className="flex flex-col md:flex-row mx-auto items-center md:items-start bg-gradient-to-br from-blue-200 to-indigo-800 rounded-lg shadow-xl p-6 md:p-12">
    //       <div className="relative w-full md:w-1/2 lg:w-2/5 h-[20rem] md:h-[28rem] rounded-lg overflow-hidden flex-shrink-0">
    //         <Image
    //           src={propsBg}
    //           alt="Modern Building"
    //           layout="fill"
    //           objectFit="cover"
    //         />

            
    //         <div
    //           className="absolute inset-0 bg-blue-900 opacity-80" 
    //           style={{
    //             clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)'
    //           }}
    //         ></div>

    //         {/* <div className="absolute inset-0 flex items-center justify-center text-white p-4 z-10">
    //           <p className="text-xl font-bold">Discover More</p>
    //         </div> */}
    //       </div>

    //       <div className="mt-8 md:mt-0 md:ml-12 md:w-1/2 lg:w-3/5">
    //         <span className="text-red-600 font-semibold text-sm mb-2 block">
    //           <span className="inline-block transform rotate-90 scale-x-[-1] text-lg leading-none align-middle mr-1">▲</span>
    //           About Us
    //         </span>
    //         <h2 className="text-6xl md:text-4xl font-semibold text-gray-900 mb-4">
    //           Who We Are
    //         </h2>
    //         <p className="text-gray-700 leading-relaxed mb-4">
    //           <span className="font-bold text-red-600">PWAN</span>
    //           <span className="font-bold text-blue-600"> ELITE</span> is passionate about revealing the amazing potentials
    //           available in the real estate industry to the world by providing cost-
    //           effective luxury properties to help clients become land/home owners
    //           easily and faster. Just as the thrill of an online casino
    //           wazamba experience can captivate players, we aim to captivate our
    //           clients with our commitment to transparency and trust. We are also
    //           dedicated to regaining the lost trust of many in the real estate
    //           industry, especially Nigerians in the diaspora.
    //         </p>
    //         <p className="text-gray-700 leading-relaxed">
    //           We guarantee scam-free properties and transactions, preventing
    //           fraudulent real estate dealings. We have years of experience and
    //           expertise in the real estate industry and will only deliver the very
    //           best of services to our clients.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative bg-gray-100 mb-12 md:mb-28 py-12 md:py-24 overflow-hidden">
      {/* This div represents the main background for the section. */}
      {/* The diagonal effect will be applied to the image overlay or a separate element if needed. */}
      {/* No specific style needed here for a complex diagonal background unless explicitly defined. */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-blue-200 to-indigo-800 rounded-lg shadow-xl p-6 md:p-12 gap-8 md:gap-12">
          <div className="relative w-full md:w-1/2 lg:w-2/5 h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={propsBg}
              alt="Modern Building"
              layout="fill"
              objectFit="cover"
            />

            {/* Diagonal overlay on the image */}
           <div
              className="absolute inset-0 bg-blue-900 opacity-80"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 0 100%)', // Example: Top-left triangle overlay
             }}
            ></div>
          </div>

          <div className="mt-4 md:mt-0 md:ml-0 md:w-1/2 lg:w-3/5 text-white">
            <span className="text-red-300 font-semibold text-sm sm:text-base mb-2 block">
              <span className="inline-block transform rotate-90 scale-x-[-1] text-lg leading-none align-middle mr-1">▲</span>
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight">
              Who We Are
            </h2>
            <p className="text-blue-100 leading-relaxed mb-4 text-base sm:text-lg">
              <span className="font-bold text-red-300">PWAN</span>
              <span className="font-bold text-blue-300"> ELITE</span> is passionate about revealing the amazing potentials
              available in the real estate industry to the world by providing cost-
              effective luxury properties to help clients become land/home owners
              easily and faster. Just as the thrill of an online casino
              wazamba experience can captivate players, we aim to captivate our
              clients with our commitment to transparency and trust. We are also
              dedicated to regaining the lost trust of many in the real estate
              industry, especially Nigerians in the diaspora.
            </p>
            <p className="text-blue-100 leading-relaxed text-base sm:text-lg">
              We guarantee scam-free properties and transactions, preventing
              fraudulent real estate dealings. We have years of experience and
              expertise in the real estate industry and will only deliver the very
              best of services to our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};