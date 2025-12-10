import React from 'react'

const Day6 = () => {
  return (
    <>
      <footer className='bg-gray-900 text-white p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div>
            <h2 className='text-2xl font-bold'>ChouhanDev</h2>
            <p className='text-gray-400 mt-2'>Building amazing websites with Tailwind CSS.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='hover:text-blue-400 cursor-pointer'>Home</span>
            <span className='hover:text-blue-400 cursor-pointer'>About</span>
            <span className='hover:text-blue-400 cursor-pointer'>Services</span>
            <span className='hover:text-blue-400 cursor-pointer'>Contact</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='hover:text-blue-400 cursor-pointer'>Facebook </span>
            <span className='hover:text-blue-400 cursor-pointer'>Instagram</span>
            <span className='hover:text-blue-400 cursor-pointer'>YouTube</span>
            <span className='hover:text-blue-400 cursor-pointer'>X</span>
        </div>
      </footer>
    </>
  )
}

export default Day6
