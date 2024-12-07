import React from 'react'

function LearnHerbProfileCard() {
  return (
    <div className='h-rel w-learn-herb-profile-card bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden'>
        <div className='h-36 w-full bg-gray-100'></div>
        <div className='flex flex-col p-6 gap-2'>
            <h1 className='text-2xl font-bold text-accent'>Herb Name</h1>
            <p className='text-gray-600 font-bold -mt-2 text-sm'>Botanical Name</p>
            <p className='text-gray-600'>Herb Description</p>
            <div className='flex gap-2 mt-2'>
                <span className='bg-primary rounded-xl border text-gray-800 border-accent px-2 font-bold text-xs'>Relaxation</span>
                <span className='bg-primary rounded-xl border text-gray-800 border-accent px-2 font-bold text-xs'>Skin Care</span>
            </div>
            <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out mt-1">Sign up / Login</button>
        </div>
    </div>  
  )
}

export default LearnHerbProfileCard