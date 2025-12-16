import React from 'react'

const Hero = () => {
  return (
    <>
     <section  className='p-6 flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2'>
            <h2 className='text-3xl md:text-5xl font-bold'>Build Responsive Websites</h2>
            <p className='text-gray-600 mt-3'>Tailwind CSS se fast aur clean UI banana sikho.</p>
            <button className='mt-4 bg-blue-600 text-white py-2 px-5 rounded-lg'>Get Started</button>
        </div>
        <img className='w-full md:w-1/2 mt-6 md:mt-0 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasKPDCewT1v2j4mJjfCN1rqH2SczejiwkoA&s" alt="" />
        </section> 
    </>
  )
}

export default Hero
