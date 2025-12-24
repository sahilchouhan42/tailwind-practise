import React, { useState } from 'react'

const Day10 = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <button className='bg-blue-600 text-white px-4 py-2 rounded-lg' onClick={()=>setOpen(true)}>Open Modal</button>
      {
        open &&(
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <div className='bg-white p-6 rounded-xl w-[90%] max-w-md transform transition-all duration-300 scale-100 opacity-100'>
                    <h2 className='text-2xl font-bold'>Hello Chouhan</h2>
                    <p className='text-gray-600 mt-2'>React + Tailwind Modal</p>
                    <button className='mt-4 bg-red-500 text-white px-4 py-2 rounded-lg' onClick={()=>setOpen(false)}>Close</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Day10
