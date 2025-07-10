import ServiceTab from "@/features/ServiceTab";
import { realEstate, seeLove, speak, servicesImg } from "@/features/assets";
import Image from "next/image";
import React, { useState } from "react";

const index = () => {
  const services = [
    {
      title: "Real estate marketing",
      img: seeLove.src,
      icon: "📢",
      description:
        "We have one of the most sophisticated marketing structures in the world that helps us promote genuine properties and meet clients at various touch points of their buying journey. Our clients have a wonderful array of properties to choose from, our process is seamless and our allocation is instant. Clients can easily be assured of value for money spent.",
      isActive: false,
    },
    {
      title: "Real Estate Development & Management",
      icon: "🏗️",
      img: realEstate.src,
      description:
        "We have one of the most sophisticated marketing structures in the world that helps us promote genuine properties and meet clients at various touch points of their buying journey. Our clients have a wonderful array of properties to choose from, our process is seamless and our allocation is instant. Clients can easily be assured of value for money spent.",
      isActive: true,
    },
    {
      title: "Seminars & Trainings",
      img: speak.src,
      icon: "🎤",
      description:
        "We have one of the most sophisticated marketing structures in the world that helps us promote genuine properties and meet clients at various touch points of their buying journey. Our clients have a wonderful array of properties to choose from, our process is seamless and our allocation is instant. Clients can easily be assured of value for money spent.",
      isActive: false,
    },
  ];

  const [activeInd, setActiveInd] = useState(1)

  const handleSetActive = (index) => {
    setActiveInd(index)
  }

  const activeService = services[activeInd]

  // const activeService = services.find((service) => service.isActive);

  return (
    <div>
      <div
        className="relative text-white p-6 md:p-12 h-[20rem] md:h-[36.5rem] flex flex-col justify-center items-center text-center "
      >
        <Image 
        src={servicesImg.src}
        alt='services bg'
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 -z-30 -mt-18"
        />
        <div className="absolute inset-0 h-[15.5rem] md:h-[32rem] bg-black opacity-40"></div>
        <h1 className="relative text-3xl md:text-6xl font-semibold">Our Services</h1>
        <p className="relative max-w-xs sm:max-w-md md:max-w-2xl mt-4">
          Exposing clients to goldmine that abounds in land and housing globally
          and spreading empowerment through real estate opportunities.
        </p>
      </div>
      <div className="bg-gray-100 p-4 md:p-18 -mt-18 flex flex-col items-center">
        <span className="text-red-600">▲ What we Offer</span>
        <h2 className="text-2xl font-semibold">Our Expert Real Estate Services</h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-7 mt-6">
          <div className="grid grid-cols-1 gap-4 w-full md:w-1/3 max-w-5xl">
            {services.map((service, index) => (
              <ServiceTab
                key={service.title}
                title={service.title}
                icon={service.icon}
                isActive={index === activeInd}
                onClick={() => handleSetActive(index)}
              />
            ))}
          </div>

          {activeService && (
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row mt-8 w-full md:max-w-5xl">
              <div className="rounded flex justify-center items-center w-full md:w-[400px]">
                <Image
                  src={activeService.img}
                  alt="realestate"
                  width={400}
                  height={500}
                />
              </div>
              <div className="md:ml-6 flex flex-col justify-center flex-1 mt-4 md:mt-0">
                <span className="text-red-600">★ We are unique in</span>
                <h3 className="text-xl font-semibold">{activeService.title}</h3>
                <p className="text-gray-600 mt-2">
                  {activeService.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
