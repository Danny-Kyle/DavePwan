"use client";
import React, { useState } from "react";
import { urbanLegacy, akuRuo, eastView, yearsOfExp } from "@/features/assets";
import { useRouter } from "next/router";

const HomeCert = () => {
  const [currentId, setCurrentId] = useState(1);
  const router = useRouter();

  const pictures = [
    { id: 1, title: "Urban Legacy", src: urbanLegacy.src, description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster." },
    { id: 2, title: "Eastview", src: eastView.src, description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster." },
    { id: 3, title: "Aku Ruo Uno", src: akuRuo.src, description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster." },
  ];

  const currentPicture = pictures.find((pic) => pic.id === currentId);

  const previous = () => {
    if (currentId > 1) {
      setCurrentId(currentId - 1);
    }
  };

  const next = () => {
    if (currentId < pictures.length) {
      setCurrentId(currentId + 1);
    }
  };

  const goToDetails = () => {
    if(currentPicture){
    router.push({
      pathname: `/picture/${currentId}`,
      query: {
        title: currentPicture.title,
        description: currentPicture.description,
        src: currentPicture.src
      }
    });
    alert(`Navigating to details page for Number ${currentId}`);}
  };

  if (!currentPicture) {
    return <div>Loading...</div>;
  }

  return (
//     <section
//       className="relative flex flex-row py-16 bg-cover bg-center items-center gap-11 justify-center h-[60rem]"
//       style={{ backgroundImage: `url(${currentPicture.src})` }}
//     >
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <span
//         onClick={previous}
//         disabled={currentId === 1}
//         className={`flex relative items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
//                        ${
//                          currentId === 1
//                            ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
//                            : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
//                        }`}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
// </svg>

//       </span>

//       <div className="relative justify-center items-center bg-[#DEE0F4] h-[48rem] rounded-2xl w-[75rem] p-4">
//         <div className="flex flex-col lg:flex-row items-center mx-5 gap-12">
//           {/* Certificate/Award Image */}
//           <div className="lg:w-1/2 flex justify-center items-center">
//             <div className="relative mt-16">
//               <img
//                 src={currentPicture.src}
//                 alt="Award Certificate"
//                 className="max-w-sm w-full h-[35rem] rounded-lg shadow-xl"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="lg:w-1/2 container justify-center flex flex-col text-center items-center">
//             <div className="flex items-center mb-6 flex-col gap-14">
//               <span>{currentId}</span>
//               <div>
//                 <h3 className="text-4xl font-semibold text-gray-800">{currentPicture.title}</h3>
//               </div>
//             </div>

//             <p className="text-gray-700 mb-8 text-2xl leading-relaxed">{currentPicture.description}</p>

//             <button onClick={goToDetails} className="hover:bg-gray-200 text-black border border-black px-6 py-2 font-semibold transition-colors">
//               Discover More
//             </button>
//           </div>
//         </div>
//       </div>

//       <span
//         onClick={next}
//         disabled={currentId === pictures.length}
//         className={`flex relative items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
//                        ${
//                          currentId === pictures.length
//                            ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
//                            : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
//                        }`}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
// </svg>

//       </span>
//     </section>
    <section className="relative flex flex-col py-12 md:py-16 lg:py-24 bg-cover bg-center items-center justify-center min-h-[50rem] md:min-h-[60rem]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${currentPicture.src})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-4 md:mx-auto p-4 sm:p-6 md:p-8 bg-[#DEE0F4] rounded-2xl w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-5xl flex flex-col items-center justify-center text-center">
        <div className="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-12">
          {/* Certificate/Award Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center py-4">
            <div className="relative mt-8 md:mt-16 w-full flex justify-center">
              <img
                src={currentPicture.src}
                alt={`Award Certificate: ${currentPicture.title}`}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto max-h-96 md:max-h-[35rem] rounded-lg shadow-xl object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start pt-4 lg:pt-0">
            <div className="flex flex-col gap-4 mb-6">
              <span className="text-xl font-medium text-gray-700">{currentId} / 3</span>
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
                  {currentPicture.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed max-w-prose">
              {currentPicture.description}
            </p>

            <button
              onClick={goToDetails}
              className="hover:bg-gray-200 text-black border border-black px-6 py-3 font-semibold transition-colors text-sm sm:text-base"
            >
              Discover More
            </button>
          </div>
        </div>

        {/* Navigation Buttons for Mobile/Tablet within the box */}
        <div className="lg:hidden flex justify-between w-full mt-8 gap-4 px-4">
          <button
            onClick={previous}
            disabled={currentId === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                         ${
                           currentId === 1
                             ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                             : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
                         }`}
            aria-label="Previous Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            {/* <span>Prev</span> */}
          </button>
          <button
            onClick={next}
            disabled={currentId === pictures.length}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                         ${
                           currentId === pictures.length
                             ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                             : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
                         }`}
            aria-label="Next Project"
          >
            {/* <span>Next</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Buttons for Desktop (outside the box) */}
      <div className="absolute top-1/2 flex flex-row w-full justify-between">
      <button
        onClick={previous}
        disabled={currentId === 1}
        className={`hidden lg:flex ml-26 relative z-20 items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                         ${
                           currentId === 1
                             ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                             : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
                         }`}
        aria-label="Previous Project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
      </button>
      <button
        onClick={next}
        disabled={currentId === pictures.length}
        className={`hidden lg:flex relative z-20 items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 mr-26
                         ${
                           currentId === pictures.length
                             ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                             : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
                         }`}
        aria-label="Next Project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </button>
      </div>
    </section>
  );
};

export default HomeCert;
