import React, { useEffect, useState } from 'react'
import {propsBg, akuRuo, speak, urbanLegacy,seeLove,eastView, koleAyo, handpick, alaomaLuxury, obiEze, eliteCity, eliteCasa, eliteEmpire, greenView, ugochiEstate} from "@/features/assets"
import Image from 'next/image'
import PropFeaturesCard from '@/features/PropFeaturesCard';
import PropPropertiesCard from '@/features/PropPropertiesCard';
import PropLandCard from '@/features/PropLandCard';

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredLands, setFilteredLands] = useState([])

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
      location: "Lagos",
      description:
        "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Urban Legacy",
      src: urbanLegacy
    },
    {
      title: "Kole Ayo Estate",
      location: "Lagos",
      description:
        "Located at Anobi London Road, Irangushi, Epe, Kole Ayo Estate comes with a Freehold title and immediate allocation. It’s near major landmarks like YabaTech Epe, LASUED, and St. Augustine University. Fenced, plotted, and ready for development—ideal for investors or homebuyers in a fast-growing area.",
      imageAlt: "Kole Ayo Estate",
      src: koleAyo
    },
    {
      title: "Eastview Phase 3",
      location: "Delta",
      description:
        "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Eastview Phase 3",
      src: eastView
    },
    {
      title: "Alaoma Luxury",
      location: "Imo",
      description:
        "Located in Ochicha, Obike, Ngor-Okpala, Alaoma Luxury Estate offers high ROI potential in a fast-developing area. Surrounded by key landmarks like Tony Chukwu Factory, Zion Ministry by Ebuka Obi, and Umueme Market Square, the estate is fenced, plotted, and comes with a Deed of Assignment and Registered Survey.",
      imageAlt: "Alaoma Luxury",
      src: alaomaLuxury
    },
    {
      title: "Obi-Eze",
      location: "Delta",
      description:
        "Located in Umueze Ibusa, Asaba, Obieze 2 is selling for ₦10M in a fast-developing, buy-and-build area along a major road. It’s just 18 minutes from Koka Flyover and close to key landmarks like FGGC Ibusa, General Hospital, and Ibusa Main Market.",
      imageAlt: "Obi-Eze",
      src: obiEze
    },
     {
      title: "Elite City",
      location: "Delta",
      description:
        "Located in Idasa, Agbara, this estate comes with a Certificate of Occupancy (C of O) and sits in a high-demand, fast-growing area ideal for residential or commercial development.\n Surrounded by landmarks like Optic Estate, Lusada, Crown City Parks & Resorts, and Ijuri Catholic Church, the estate is fenced, plotted, and offers immediate allocation. With strong ROI potential, it’s perfect for investors with vision.",
      imageAlt: "Elite City",
      src: eliteCity
    },
    {
      title: "Elite Casa",
      location: "Lagos",
      description:
        "Located in Idasa, Agbara, this estate comes with a Certificate of Occupancy (C of O) and sits in a high-demand, fast-growing area ideal for residential or commercial development.\n Surrounded by landmarks like Optic Estate, Lusada, Crown City Parks & Resorts, and Ijuri Catholic Church, the estate is fenced, plotted, and offers immediate allocation. With strong ROI potential, it’s perfect for investors with vision.",
      imageAlt: "Elite Casa",
      src: eliteCasa
    },
    {
      title: "Elite Empire",
      location: "Imo",
      description:
        "Elite Empire is strategically located in Avu-Oforola, a fast-growing area ideal for premium real estate investment. Surrounded by notable landmarks like Control Bus Stop, Avu Junction, Imo State Automobile Hub, and Deeper Life Camp Ground, it offers strong prospects for residential or commercial use.",
      imageAlt: "Elite Empire",
      src: eliteEmpire
    },
    {
      title: "Green View",
      location: "Delta",
      description:
        "Located in Ogwashi within the Asaba capital territory, Greenview Estate is selling for ₦3.5M in a fast-developing, buy-and-build area with houses and hostels already rising nearby. It sits along a major road and is just 15–20 minutes from key junctions and Asaba International Airport.",
      imageAlt: "Green View",
      src: greenView
    },
    {
      title: "Ugochi Estate",
      location: "Delta",
      description:
        "Located in Ogwashi within the Asaba capital territory, Greenview Estate is selling for ₦3.5M in a fast-developing, buy-and-build area with houses and hostels already rising nearby. It sits along a major road and is just 15–20 minutes from key junctions and Asaba International Airport.",
      imageAlt: "Ugochi Estate",
      src: ugochiEstate
    },
    {
      title: "AKU RUO UNO",
      location: "Delta",
      description:
        "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "AKU RUO UNO",
      src: akuRuo
    },
  ];

  const filterLands = (category) => {
    if(category === "All"){
      return lands;
    }
    return lands.filter(land => land.location.toLowerCase() === category.toLowerCase())
  }

  const handleCategoryClick = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);

    setTimeout(()=>{
      const filtered = filterLands(category);
      setFilteredLands(filtered);
      setIsLoading(false);
    }, 3000);
  }

  useEffect(()=>{setFilteredLands(lands)},[])

  const LoadingSpinner = () => {
    <div className="mt-8">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-red-600"></div>
              <p className="mt-4 text-gray-600">Loading properties...</p>
            </div>
          </div>
  }

  const NoPropertiesMessage = () => {
    <div className='text-center py-12'>
      <p className='text-gray-600 text-lg'>
        This location has no properties to display currently
      </p>
    </div>
  }

  return (
    <div>
      <div className="bg-cover bg-center text-white -mt-18 h-[42rem] flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${propsBg.src})`}}>
        <div className="absolute inset-0 h-[37.5rem] bg-black opacity-40"></div>
        <h1 className="relative text-6xl font-semibold">Our Properties</h1>
        <p className="relative max-w-xl mt-4">
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
      <div className="flex space-x-2 mt-4 p-3 rounded-lg bg-gray-100">
        {["All", "Delta", "Imo", "Lagos"].map((category) => (
          <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                disabled={isLoading}
                className={`rounded px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-red-600 shadow-sm"
                    : "text-gray-600 hover:text-red-600 hover:-translate-y-0.5"
                }${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {category}
              </button>
        ))}
      </div>
      <div className="mt-6 w-full max-w-4xl">
            {isLoading ? (
              // <LoadingSpinner />
              <div className='flex flex-col gap-6 justify-center items-center py-12'>
       <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-700'></div>
       <p>Loading Properties..............</p>
     </div>
             ) : filteredLands.length > 0 ? (
              <div className="space-y-6">
                {filteredLands.map((land) => (
                  <PropLandCard
                    key={land.id}
                    id={land.id}
                    title={land.title}
                    description={land.description}
                    imageSrc={land.src}
                    imageAlt={land.imageAlt}
                  />
                ))}
              </div>
            ) : (
              <NoPropertiesMessage />
            )}
          </div>
    </div>
      </section>
    </div>
  )
}

export default index