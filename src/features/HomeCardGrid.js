import React from 'react'
import { HomeExp } from './HomeExp';
import { homeBg } from './assets';

export const HomeCardGrid = ({ cards }) => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className='relative my-9 rounded-xl h-[38rem] bg-center bg-cover' style={{ backgroundImage: `url(${homeBg.src})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <span className="relative top-80 ml-12 text-white font-extralight text-lg md:text-4xl">Our Experience </span>
        <div>
          <p className=" relative text-lg md:text-2xl top-[22rem] leading-relaxed text-center px-4 max-w-3xl text-white font-light mb-4">
            {" "}
            With over a decade of excellence in the real estate industry, PWAN Elite has helped thousands of clients secure genuine properties across Nigeria. From residential plots to estate development, our deep market knowledge and trusted network make us a leading force in property investment.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <HomeExp 
            key={card.id}
            {...card}
          />
        ))}
      </div>
    </div>
  </section>
);
