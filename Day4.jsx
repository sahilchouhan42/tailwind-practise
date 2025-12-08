import React from 'react'

const Day4 = () => {
  return (
    <div className='p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <div className='shadow-lg p-4 rounded-xl bg-red-300'>
        <h2 className='text-xl font-bold'>Card 1</h2>
        <p className='text-gray-600 mt-2'>Card 1 Description</p>
      </div>
      <div className='shadow-lg p-4 rounded-xl bg-blue-300'>
        <h2 className='text-xl font-bold'>Card 2</h2>
        <p className='text-gray-600 mt-2'>Card 2 Description</p>
      </div>
      <div className='shadow-lg p-4 rounded-xl bg-green-300'>
        <h2 className='text-xl font-bold'>Card 3</h2>
        <p className='text-gray-600 mt-2'>Card 3 Description</p>
      </div>
    </div>
  )
}

export default Day4
