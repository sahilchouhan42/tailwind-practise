import React from 'react'

const Features = () => {
  return (
    <>
      <section className='p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className='shadow-lg p-4 rounded-xl text-center'>
            <h3 className='text-xl font-bold'>Fast</h3>
            <p className='text-gray-600 mt-2'>Quick development with Tailwind.</p>
        </div>
        <div className='shadow-lg p-4 rounded-xl text-center'>
            <h3 className='text-xl font-bold'>Responsive</h3>
            <p className='text-gray-600 mt-2'>Mobile to laptop perfect fit.</p>
        </div>
        <div className='shadow-lg p-4 rounded-xl text-center'>
            <h3 className='text-xl font-bold'>Clean UI</h3>
            <p className='text-gray-600 mt-2'>Modern & professional look.</p>
        </div>
      </section>
    </>
  )
}

export default Features
