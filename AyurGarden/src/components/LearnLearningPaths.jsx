import React from 'react'
import LearnLearningPathsCard from './LearnLearningPathsCard'

function LearnLearningPaths() {
  return (
    <div className='h-rel w-full py-16 flex flex-col items-center justify-center gap-16'>
        <h1 className='text-3xl font-bold text-accent'>Learning Paths</h1>
        <div className='flex gap-8'>
            <LearnLearningPathsCard/>
            <LearnLearningPathsCard/>
            <LearnLearningPathsCard/>
        </div>

    </div>
  )
}

export default LearnLearningPaths