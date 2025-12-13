import React from 'react'

const Day8 = () => {
    return (
        <div className='p-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
            <div className='shadow-lg p-6 rounded-xl bg-white text-center transition-transform hover:scale-110 hover:bg-[#f5f5f5]'>
                <img className='w-20 h-20 rounded-full mx-auto' src="https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg" alt="" />
                <h3 className='text-xl font-bold mt-4'>Amit Sharma</h3>
                <p className='text-gray-500 text-sm'>Web Developer</p>
                <p className='mt-3 text-gray-600'>“Tailwind CSS ne meri development speed double kar di!”</p>
            </div>
            <div className='shadow-lg p-6 rounded-xl bg-white text-center transition-transform hover:scale-110 hover:bg-[#f5f5f5]'>
                <img className='w-20 h-20 rounded-full mx-auto' src="https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg" alt="" />
                <h3 className='text-xl font-bold mt-4'>Priya Singh</h3>
                <p className='text-gray-500 text-sm'>UI Designer</p>
                <p className='mt-3 text-gray-600'>“Responsive layouts banana bohot easy ho gaya!”</p>
            </div>
            <div className='shadow-lg p-6 rounded-xl bg-white text-center transition-transform hover:scale-110 hover:bg-[#f5f5f5]'>
                <img className='w-20 h-20 rounded-full mx-auto' src="https://images.stockcake.com/public/1/b/2/1b233006-c7d5-4955-8499-b591153b7fd7_large/confident-business-professional-stockcake.jpg" alt="" />
                <h3 className='text-xl font-bold mt-4'>Rahul Verma</h3>
                <p className='text-gray-500 text-sm'>Freelancer</p>
                <p className='mt-3 text-gray-600'>“Tailwind se clean aur fast websites create hoti hain.”</p>
            </div>
        </div>
    )
}

export default Day8
