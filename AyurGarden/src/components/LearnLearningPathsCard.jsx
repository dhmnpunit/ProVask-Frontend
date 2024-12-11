import React from 'react'
import { Link } from "react-router-dom";

function LearnLearningPathsCard({
  image="",
  heading="Course Heading",
  description="Course Description",
  link=""
}) {
  return (
    <div className='h-rel w-learn-learning-paths bg-white shadow-lg rounded-xl overflow-hidden p-6 flex flex-col gap-2 border border-gray-200'>
        <div className='h-16 w-16 rounded-xl'>
          <img src={image} alt="" />
        </div>
        <h1 className='text-2xl font-bold text-accent'>{heading}</h1>
        <p className='text-gray-600'>{description}</p>
        <Link to={link} target="_blank" className="text-accent hover:text-black cursor-pointer transition-colors">
          <button className="bg-accent px-4 py-2 w-full h-11 rounded-xl text-white hover:bg-green-800 ease-out mt-1">Start Path</button>
        </Link>
        
    </div>
  )
}

export default LearnLearningPathsCard