import React from 'react'

export const HomeSub = () => {
  return (
    <div className='m-6 justify-center flex flex-col gap-8 text-center items-center h-[22rem] w-full'>
        <h2 className='text-3xl font-semibold'>Subscribe to our email</h2>
        <p>Be the first to know about new collections and exclusive offers.</p>
        <span className='border p-2 w-[36rem] justify-between border-black flex flex-row'>
            <input type='text' className='outline-none' placeholder='Email Address'/>
            <p className='text-white bg-red-500 p-2 m-1'>Discover More</p>
        </span>
    </div>
  )
}
