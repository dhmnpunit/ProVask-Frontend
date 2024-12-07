import React from 'react'
import LearnFeaturedCourseCard from './LearnFeaturedCourseCard'

function LearnFeaturedCourses() {
  return (
    <div className='h-rel w-full flex flex-col items-center gap-16 my-16 justify-center'>
        <h1 className='text-3xl font-bold text-accent'>Featured Courses</h1>
        <div className='flex gap-8'>
            <LearnFeaturedCourseCard/>
            <LearnFeaturedCourseCard/>
            <LearnFeaturedCourseCard/>
        </div>

    </div>
  )
}

export default LearnFeaturedCourses