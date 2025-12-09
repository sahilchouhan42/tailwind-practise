import React from 'react'

const Day5 = () => {
  return (
    <div className='p-6 flex flex-col md:flex-row items-center justify-between'>
      <div className='md:w-1/2'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Build Beautiful Websites</h1>
        <p className='text-gray-600 mt-3'>Tailwind CSS se website banana bahut easy ho jata hai.</p>
        <button className='bg-blue-600 text-white py-2 px-5 rounded-lg mt-4'>Get Started</button>
      </div>
      <img className='w-full md:w-1/2 mt-6 md:mt-0 rounded-xl shadow-lg' src="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"/>
    </div>
  )
}

export default Day5
