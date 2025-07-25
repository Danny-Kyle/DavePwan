import React from "react";

export const HomeSub = () => {
  return (
    // <div className='m-6 justify-center flex flex-col gap-8 text-center items-center h-[22rem] w-full'>
    //     <h2 className='text-3xl font-semibold'>Subscribe to our email</h2>
    //     <p>Be the first to know about new collections and exclusive offers.</p>
    //     <span className='border p-2 w-[36rem] justify-between border-black flex flex-row'>
    //         <input type='text' className='outline-none' placeholder='Email Address'/>
    //         <p className='text-white bg-red-500 p-2 m-1'>Discover More</p>
    //     </span>
    // </div>
    <div className="mx-4 my-8 md:my-16 flex flex-col gap-6 md:gap-8 text-center items-center py-8 px-4 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
        Subscribe to our email
      </h2>

      <p className="text-base sm:text-lg max-w-md">
        Be the first to know about new collections and exclusive offers.
      </p>

      <div className="border p-1 sm:p-2 w-full max-w-sm sm:max-w-md justify-between border-black flex flex-row items-center">
        <input
          type="email"
          className="outline-none flex-grow p-1 sm:p-2"
          placeholder="Email Address"
          aria-label="Email Address"
        />

        <button
          type="submit"
          className="text-white bg-red-500 p-2 sm:p-3 ml-1 text-sm sm:text-base whitespace-nowrap"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};
