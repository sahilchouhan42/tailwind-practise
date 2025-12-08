import React from 'react'

const Day2 = () => {
  return (
    <div className='p-6 flex justify-center'>
      <div  className='w-full md:w-1/2 lg:w-1/3 shadow-xl rounded-xl p-4'>
        <img className='rounded-xl w-full' src="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg" alt="" />
        <h2 className='text-2xl font-bold text-center mt-4'>Card Tiltle</h2>
        <p className='text-gray-600 text-center mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio maxime hic cum perspiciatis possimus, soluta fuga incidunt quod commodi, itaque ea praesentium nesciunt facilis officia.</p>
        <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg block mx-auto'>Read More</button>
      </div>
    </div>
  )
}

export default Day2
