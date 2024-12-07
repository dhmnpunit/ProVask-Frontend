import React from 'react'

function LearnLearningPathsCard() {
  return (
    <div className='h-rel w-learn-learning-paths bg-white shadow-lg rounded-xl overflow-hidden p-6 flex flex-col gap-2 border border-gray-200'>
        <div className='h-16 w-16 bg-gray-200 rounded-xl'></div>
        <h1 className='text-2xl font-bold text-accent'>Medicinal Herbs</h1>
        <p className='text-gray-600'>Explore the healing properties of herbs and their applications in traditional and modern medicine.</p>
        <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out mt-1">Start Path</button>
    </div>
  )
}

export default LearnLearningPathsCard