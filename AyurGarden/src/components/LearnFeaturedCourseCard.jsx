import React from 'react'
import CardImage from '../assets/games-card-image.png'

function LearnFeaturedCourseCard() {
  return (
    <div className='h-rel w-learn-featured-courses-card bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200'>
        <div className='h-36 w-full bg-gray-100'></div>
        <div className='flex flex-col p-6 gap-2'>
            <h1 className='text-2xl font-bold text-accent'>Course Heading</h1>
            <p className='text-gray-600'>Course description</p>
            <div className='flex justify-between items-center text-gray-600 text-sm'>
                <p className='bg-primary rounded-xl border text-gray-800 border-accent text-xs px-2 font-bold'>Beginner</p>
                <p>4 weeks</p>
                <p>1234</p>
            </div>
            <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out mt-1">Sign up / Login</button>
        </div>
    </div>
  )
}

export default LearnFeaturedCourseCard