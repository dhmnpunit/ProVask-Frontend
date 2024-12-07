import React from 'react'

function LearnResourceLibraryCard() {
  return (
    <div className='h-rel w-learn-library-card rounded-xl p-6 shadow-xl flex flex-col gap-2 bg-white border border-gray-200'>
        <div className='h-16 w-16 bg-gray-200 rounded-xl'></div>
        <h1 className='text-2xl font-bold text-accent'>The Complete Guide to Medicinal Herbs</h1>
        <p className='text-gray-600'>E-Book</p>
        <div className='flex gap-2'>
            <span className='bg-primary rounded-xl border text-gray-800 border-accent px-2 font-bold text-xs'>Medicinal</span>
            <span className='bg-primary rounded-xl border text-gray-800 border-accent px-2 font-bold text-xs'>Comprehensive</span>
        </div>
        <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out mt-1">Access Resource</button>
    </div>
  )
}

export default LearnResourceLibraryCard