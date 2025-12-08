import React from 'react'

const Day3 = () => {
  return (
    <>
      <nav className='bg-gray-200 flex justify-between items-center' >
        <h1 className='text-xl font-bold'>Logo</h1>
        <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
            <span className='cursor-pointer hover:text-blue-500'>Home</span>
            <span className='cursor-pointer hover:text-blue-500'>About</span>
            <span className='cursor-pointer hover:text-blue-500'>Contact</span>
        </div>
      </nav>
    </>
  )
}

export default Day3
