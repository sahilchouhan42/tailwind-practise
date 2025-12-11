import React from 'react'

const Day7 = () => {
  return (
    <div className='p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {/* Basic */}
      <div className='shadow-xl p-6 bg-red-300 rounded-2xl text-center transition hover:scale-105'>
        <h2 className='text-2xl font-bold'>Basic</h2>
        <p className='text-3xl  font-bold mt-2'>$9</p>
        <div className='flex flex-col gap-1 text-gray-600 mt-3'>
            <span >1 Project</span>
            <span>Email Support</span>
            <span>Basic Features</span>
        </div>
        <button className='bg-blue-600 text-white py-2 px-4 rounded-lg mt-4'>Choose Plan</button>
      </div>
      {/* standard */}
      <div className='shadow-xl p-6 bg-red-300 rounded-2xl text-center transition hover:scale-105'>
        <h2 className='text-2xl font-bold'>Standard</h2>
        <p className='text-3xl  font-bold mt-2'>$$19</p>
        <div className='flex flex-col gap-1 text-gray-600 mt-3' >
            <span>5 Projects</span>
            <span>Priority Support</span>
            <span>All Basic Features</span>
        </div>
        <button className='bg-blue-600 text-white py-2 px-4 rounded-lg mt-4' >Choose Plan</button>
      </div>
      {/* Premium */}
      <div className='shadow-xl bg-red-300 p-6 rounded-2xl text-center transition hover:scale-105'>
        <h2 className='text-2xl font-bold'>Premium</h2>
        <p className='text-3xl  font-bold mt-2'>$29</p>
        <div className='flex flex-col gap-1 text-gray-600 mt-3'>
            <span>Unlimited Projects</span>
            <span>24/7 Support</span>
            <span>All Premium Features</span>
        </div>
        <button className='bg-blue-600 text-white py-2 px-4 rounded-lg mt-4' >Choose Plan</button>
      </div>
    </div>
  )
}

export default Day7
