import React from 'react'
import LearnHerbProfileCard from './LearnHerbProfileCard'

function LearnHerbProfiles() {
  return (
    <div className='h-rel w-full flex flex-col items-center gap-16 justify-center my-16 mb-60'>
        <h1 className='text-3xl font-bold text-accent'>Explore Herb Profiles</h1>
        <div className='flex gap-8'>
            <LearnHerbProfileCard/>
            <LearnHerbProfileCard/>
            <LearnHerbProfileCard/>
        </div>
    </div>  
    
  )
}

export default LearnHerbProfiles