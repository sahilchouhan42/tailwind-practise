import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-200 p-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>ChouhanDev</h1>
        <div className='flex gap-4'>
            <span className='hover:text-blue-600 cursor-pointer'>Home</span>
            <span className='hover:text-blue-600 cursor-pointer'>Features</span>
            <span className='hover:text-blue-600 cursor-pointer'>Contact</span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
