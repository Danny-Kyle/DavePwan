"use client";
import React, { useState } from "react";
import { urbanLegacy, akuRuo, eastView, koleAyo, obiEze, eliteCity, eliteCasa, alaomaLuxury, eliteEmpire, greenView, ugochiEstate, ugwumbaEstate, eliteEastLand1, eliteEastland2, yearsOfExp } from "@/features/assets";
import { useRouter } from "next/router";

const HomeCert = () => {
  const [currentId, setCurrentId] = useState(1);
  const router = useRouter();

  const pictures = [
    { id: 1, title: "Urban Legacy", src: urbanLegacy.src, description: "Urban Legacy Estate is located at Ebute Kekere Way, Igando, Lagos — a developed area near LASU, IBA Estate, and Alaba Market. It has a registered survey, ongoing road work, and is perfect for building now or investing for future value." },
    { id: 2, title: "Eastview", src: eastView.src, description: "Located at Anobi London Road, Irangushi, Epe, Kole Ayo Estate comes with a Freehold title and immediate allocation. It’s near major landmarks like YabaTech Epe, LASUED, and St. Augustine University. Fenced, plotted, and ready for development—ideal for investors or homebuyers in a fast-growing area." },
    { id: 3, title: "Aku Ruo Uno", src: akuRuo.src, description: "Strategically located in a fully developed area with existing houses and direct road access.Comes with Deed of Assignment and Registered Survey for secure ownership.Allocation is immediate upon full payment, with documents ready within 3 months.Surrounded by top landmarks like Road Safety HQ, Immigration HQ, and St. Augustine University." },
    { id: 4, title: "Kole Ayo Estate", src: koleAyo.src, description: "Located at Anobi London Road, Irangushi, Epe, Kole Ayo Estate comes with a Freehold title and immediate allocation. It’s near major landmarks like YabaTech Epe, LASUED, and St. Augustine University. Fenced, plotted, and ready for development—ideal for investors or homebuyers in a fast-growing area." },
    { id: 5, title: "Obi-Eze", src: obiEze.src, description: "Located in Umueze Ibusa, Asaba, Obieze 2 is selling for ₦10M in a fast-developing, buy-and-build area along a major road. It’s just 18 minutes from Koka Flyover and close to key landmarks like FGGC Ibusa, General Hospital, and Ibusa Main Market." },
    { id: 6, title: "Elite City", src: eliteCity.src, description: "Elite City is located directly opposite Admiralty University in Ibusa, Asaba, selling for ₦6M. Positioned in a rapidly developing area, it’s just 15 minutes from Koka Flyover and surrounded by key landmarks like the 63 Brigade Army HQ, Bethel's Court, and a major Chinese construction site." },
    { id: 7, title: "Elite Casa", src: eliteCasa.src, description: "Located in Idasa, Agbara, this estate comes with a Certificate of Occupancy (C of O) and sits in a high-demand, fast-growing area ideal for residential or commercial development.\n Surrounded by landmarks like Opic Estate, Lusada, Crown City Parks & Resorts, and Ijuri Catholic Church, the estate is fenced, plotted, and offers immediate allocation. With strong ROI potential, it’s perfect for investors with vision." },
    { id: 8, title: "Alaoma Luxury", src: alaomaLuxury.src, description: "Located in Ochicha, Obike, Ngor-Okpala, Alaoma Luxury Estate offers high ROI potential in a fast-developing area. Surrounded by key landmarks like Tony Chukwu Factory, Zion Ministry by Ebuka Obi, and Umueme Market Square, the estate is fenced, plotted, and comes with a Deed of Assignment and Registered Survey." },
    { id: 9, title: "Elite Empire", src: eliteEmpire.src, description: "Elite Empire is strategically located in Avu-Oforola, a fast-growing area ideal for premium real estate investment. Surrounded by notable landmarks like Control Bus Stop, Avu Junction, Imo State Automobile Hub, and Deeper Life Camp Ground, it offers strong prospects for residential or commercial use." },
    { id: 10, title: "Green View", src: greenView.src, description: "Located in Ogwashi within the Asaba capital territory, Greenview Estate is selling for ₦3.5M in a fast-developing, buy-and-build area with houses and hostels already rising nearby. It sits along a major road and is just 15–20 minutes from key junctions and Asaba International Airport." },
    { id: 11, title: "Ugochi Estate", src: ugochiEstate.src, description: "Located in Issele Mpetime along the Asaba–Benin Expressway, Ugochi Estate is selling for ₦1,950,000 and offers high ROI potential in a fast-appreciating corridor. Ideal for land banking, it's just 20 minutes from Asaba International Airport.Notable landmarks nearby include Wichtech Roofing Company, Otulu and Okpanam City Gates, and more. The estate is fenced, plotted, and comes with a Deed of Assignment and Registered Survey." },
    { id: 12, title: "Elite Eastland Phase 1", src: eliteEastLand1.src, description: "Elite Eastland Phase 1 is a prime estate located in Ngor,Okpala Airport Road, Owerri, along the Port Harcourt–Owerri Expressway. Surrounded by key landmarks and just minutes from Obinze Army Barracks, it offers high ROI potential. The estate is fully fenced, plotted, and comes with a Deed of Assignment and Registered Survey, with instant allocation and documents ready within three months." },
    { id: 13, title: "Elite Eastland Phase 2", src: eliteEastland2.src, description: "Elite Eastland Phase 2 is a prime estate located in Umuelu, Umuagwo, Owerri, along the Port Harcourt–Owerri Expressway. Surrounded by key landmarks and just minutes from Obinze Army Barracks, it offers high ROI potential. The estate is fully fenced, plotted, and comes with a Deed of Assignment and Registered Survey, with instant allocation and documents ready within three months." },
    { id: 14, title: "Ugwumba Estate", src: ugwumbaEstate.src, description: "Elite Eastland Phase 2 is a prime estate located in Umuelu, Umuagwo, Owerri, along the Port Harcourt–Owerri Expressway. Surrounded by key landmarks and just minutes from Obinze Army Barracks, it offers high ROI potential. The estate is fully fenced, plotted, and comes with a Deed of Assignment and Registered Survey, with instant allocation and documents ready within three months." }
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
            <div className="relative my-8 md:my-4 w-full flex justify-center">
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
              <span className="text-xl font-medium text-gray-700">{currentId} — 14</span>
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
