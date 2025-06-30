import React from 'react'
import {propsBg, akuRuo, speak, urbanLegacy,seeLove,eastView, handpick} from "@/features/assets"
import Image from 'next/image'
import PropFeaturesCard from '@/features/PropFeaturesCard';
import PropPropertiesCard from '@/features/PropPropertiesCard';
import PropLandCard from '@/features/PropLandCard';

const index = () => {
  const features = [
    { title: "Handpicked Homes, Tailored for You", style: { backgroundImage: `url(${handpick.src})`} },
    { title: "Properties That Speak Your Style", style: { backgroundImage: `url(${speak.src})`} },
    { title: "See It. Love It. Live It.", style: { backgroundImage: `url(${seeLove.src})`} },
  ];

  const properties= [
    { title: "Kole–Ayo Estate", location: "Epe, Lagos" },
    { title: "Ugochi Estate", location: "Issele Mpetime, Asaba" },
    { title: "Urban Legacy", location: "LASU-Isherri Road, Lagos" },
    { title: "Elite EastLand", location: "Egbema LGA, Imo State" },
  ];

  const lands = [
    {
      title: "Urban Legacy",
      description:
        "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Urban Legacy",
      src: urbanLegacy
    },
    {
      title: "Eastview Phase 3",
      description:
        "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Eastview Phase 3",
      src: eastView
    },
    {
      title: "AKU RUO UNO",
      description:
        "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "AKU RUO UNO",
      src: akuRuo
    },
  ];

  return (
    <div>
      <div className="bg-cover bg-center text-white -mt-18 h-[42rem] flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${propsBg.src})`}}>
        <h1 className="text-6xl font-semibold">Our Properties</h1>
        <p className="max-w-xl mt-4">
          Exposing clients to goldmine that abounds in land and housing globally
          and spreading empowerment through real estate opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-6">
        {features.map((feature) => (
          <PropFeaturesCard key={feature.title} title={feature.title} style={feature.style} />
        ))}
      </div>

      <div className="bg-gray-100 flex flex-row justify-evenly p-6">
        <div className="flex flex-col items-center justify-center">
          <span className='flex flex-row gap-2'><p className='text-red-600'>▲</p>Properties</span>
          <h2 className="text-2xl font-bold">Properties Selling Fast</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-11">
          {properties.map((property) => (
            <PropPropertiesCard
              key={property.title}
              title={property.title}
              location={property.location}
            />
          ))}
        </div>
      </div>

      <section>
        <div className="min-h-screen flex flex-col items-center pt-4 pb-24 mb-48">
      <div className="text-center">
        <span className="text-red-600">▲ Properties</span>
        <h1 className="text-3xl font-bold">Our Lands</h1>
      </div>
      <div className="flex space-x-2 mt-4 p-3 bg-gray-100">
        {["All", "Delta", "Imo", "Lagos"].map((category) => (
          <button
            key={category}
            className="rounded px-3 py-1 text-gray-600 active:bg-white active:text-red-600 hover:text-red-600"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-6 w-full max-w-4xl">
        {lands.map((land) => (
          <PropLandCard
            key={land.title}
            id = {land.id}
            title={land.title}
            description={land.description}
            imageSrc={land.src}
            imageAlt={land.imageAlt}
          />
        ))}
      </div>
    </div>
      </section>
    </div>
  )
}

export default index