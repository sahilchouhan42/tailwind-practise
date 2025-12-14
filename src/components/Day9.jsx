import React from 'react'

const Day9 = () => {
  return (
    <div className='p-6 flex justify-center'>
      <form className='w-full md:w-2/3 lg:w-1/2 shadow-lg p-6 rounded-xl flex flex-col gap-6'>
        <h2 className='text-2xl font-bold text-center'>Contact Us</h2>
        <input className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Your Name' />
        <input className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder='Your Email' />
        <textarea className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your message' rows={"4"}></textarea>
        <button className='bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>Send Message</button>
      </form>
    </div>
  )
}

export default Day9
