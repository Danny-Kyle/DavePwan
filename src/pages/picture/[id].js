"use client"; // If this page needs client-side interactivity, add "use client"

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // If you want to use Next.js Image component

const PictureDetailPage = () => {
  const router = useRouter();
  const { id, title, description, src } = router.query;

  // Basic check to ensure data is available, especially on initial load
  if (!router.isReady) {
    return <div className="text-center py-10">Loading details...</div>;
  }

  // Handle case where ID or other data might be missing unexpectedly
  if (!id || !title || !description || !src) {
    return (
      <div className="text-center py-10 text-red-600">
        Error: Picture details not found or incomplete.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <section className="w-full flex flex-col items-center mx-auto mb-8">
        <span className="font-semibold text-6xl mb-4">{title}</span>
        <p className="w-2/3 text-center leading-relaxed">{description}</p>
      </section>
      <div className="flex justify-center w-full gap-8 bg-gray-100 shadow-lg p-6 md:p-10">
        {/* Image Section */}
        <div className="w-full relative gap-14 items-center flex flex-col h-96 lg:h-[48rem] rounded-lg overflow-hidden mb-6">
          {/* Using Next.js Image for optimization */}
          <div>
            <Image
              src={src}
              alt={title}
              width={350}
              height={500}
            //   layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 w-full px-4">
            <span className="bg-red-500 cursor-pointer hover:bg-gray-300 text-white border border-gray-400 font-mono py-3 px-6 rounded-md transition-colors shadow">Download Subscription Form</span>
            <span className="cursor-pointer  text-red-400 border border-red-400 font-mono py-3 px-6 rounded-md transition-colors shadow">Download Flyer</span>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col items-center mx-auto mt-16">
        <p className="font-medium text-xl mb-4">Gift Your Loved Ones The Gift Of <span className="text-red-400">Homeownership</span></p>
        <div>
            <p>Unveiling A Piece Of Property You Deserve!!!</p>
        <p>Legacy Haven Estate, Ode-Omi</p>
        <p>Actual Price N2M</p>
        <p>▪ N1M for300sqm</p>
        <p>In Close Proximity To</p>
        <p>📍La Campagne Tropicana</p>
        <p>📍Lekki Free Trade Zone</p>
        <p>📍Dangote Refinery</p>
        <p>📍Chinese Farm</p>
        <p>Subscribe and Experience Serene living in the most sought after Location In Lagos!</p>
        <p>For a free site inspection, visit our office at 📌No. 10 road 7 Lekki county homes Ikota Villa Lekki Lagos.</p>
      
        </div>
        </section>
      <button
        onClick={() => router.back()}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow"
      >
        Go Back
      </button>
    </div>
  );
};

export default PictureDetailPage;
