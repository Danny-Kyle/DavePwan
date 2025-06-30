import ServiceTab from "@/features/ServiceTab";
import { realEstate, servicesImg } from "@/features/assets";
import Image from "next/image";
import React from "react";

const index = () => {
  const services = [
    {
      title: "Real estate marketing",
      icon: "📢",
      description:
        "We have one of the most sophisticated marketing structures in the world that helps us promote genuine properties and meet clients at various touch points of their buying journey. Our clients have a wonderful array of properties to choose from, our process is seamless and our allocation is instant. Clients can easily be assured of value for money spent.",
      isActive: false,
    },
    {
      title: "Real Estate Development & Management",
      icon: "🏗️",
      description:
        "We have one of the most sophisticated marketing structures in the world that helps us promote genuine properties and meet clients at various touch points of their buying journey. Our clients have a wonderful array of properties to choose from, our process is seamless and our allocation is instant. Clients can easily be assured of value for money spent.",
      isActive: true,
    },
    {
      title: "Seminars & Trainings",
      icon: "🎤",
      description:
        "We have one of the most sophisticated marketing structures in the world that helps us promote genuine properties and meet clients at various touch points of their buying journey. Our clients have a wonderful array of properties to choose from, our process is seamless and our allocation is instant. Clients can easily be assured of value for money spent.",
      isActive: false,
    },
  ];

  const activeService = services.find((service) => service.isActive);

  return (
    <div>
      <div
        className="relative text-white h-[32rem] flex flex-col justify-center items-center text-center p-12"
      >
        <Image 
        src={servicesImg.src}
        alt='services bg'
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 -z-30 -mt-18"
        />
        <h1 className="text-6xl font-semibold">Our Services</h1>
        <p className="max-w-2xl mt-4">
          Exposing clients to goldmine that abounds in land and housing globally
          and spreading empowerment through real estate opportunities.
        </p>
      </div>
      <div className="bg-gray-100 p-18 -mt-18 flex flex-col items-center">
        <span className="text-red-600">▲ What we Offer</span>
        <h2 className="text-2xl font-semibold">Our Expert Real Estate Services</h2>

        <div className="flex flex-row gap-7 mt-6">
          <div className="grid grid-cols-1 gap-4 w-1/3 max-w-5xl">
            {services.map((service) => (
              <ServiceTab
                key={service.title}
                title={service.title}
                icon={service.icon}
                isActive={service.isActive}
              />
            ))}
          </div>

          {activeService && (
            <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row mt-8 w-full max-w-5xl">
              <div className="rounded flex justify-center items-center w-full md:w-md">
                <Image
                  src={realEstate.src}
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
