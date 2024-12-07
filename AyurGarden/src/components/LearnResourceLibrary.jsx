import React from 'react'
import LearnResourceLibraryCard from './LearnResourceLibraryCard'

function LearnResourceLibrary() {
  return (
    <div className='h-rel w-full py-16 flex flex-col items-center justify-center gap-16'>
        <h1 className='text-3xl font-bold text-accent'>Resource Library</h1>
        <div className='flex gap-8'>
            <LearnResourceLibraryCard/>
            <LearnResourceLibraryCard/>
            <LearnResourceLibraryCard/>
        </div>
    </div>
  )
}

export default LearnResourceLibrary