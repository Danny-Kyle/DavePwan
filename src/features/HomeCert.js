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
    <section
      className="relative flex flex-row py-16 bg-cover bg-center items-center gap-11 justify-center h-[60rem]"
      style={{ backgroundImage: `url(${currentPicture.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <span
        onClick={previous}
        disabled={currentId === 1}
        className={`flex relative items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                       ${
                         currentId === 1
                           ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                           : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
                       }`}
      >
        Previous
      </span>

      <div className="relative justify-center items-center bg-[#DEE0F4] h-[48rem] rounded-2xl w-[75rem] p-4">
        <div className="flex flex-col lg:flex-row items-center mx-5 gap-12">
          {/* Certificate/Award Image */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative mt-16">
              <img
                src={currentPicture.src}
                alt="Award Certificate"
                className="max-w-sm w-full h-[35rem] rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 container justify-center flex flex-col text-center items-center">
            <div className="flex items-center mb-6 flex-col gap-14">
              <span>{currentId}</span>
              <div>
                <h3 className="text-4xl font-semibold text-gray-800">{currentPicture.title}</h3>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-2xl leading-relaxed">{currentPicture.description}</p>

            <button onClick={goToDetails} className="hover:bg-gray-200 text-black border border-black px-6 py-2 font-semibold transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </div>

      <span
        onClick={next}
        disabled={currentId === pictures.length}
        className={`flex relative items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                       ${
                         currentId === pictures.length
                           ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                           : "bg-[#150569] hover:bg-blue-700 text-white cursor-pointer shadow-md hover:shadow-lg"
                       }`}
      >
        Next
      </span>
    </section>
  );
};

export default HomeCert;
