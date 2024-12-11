import { PenBox } from 'lucide-react'
import React from 'react'

function CreateCourse() {
  return (
    <div className='w-60 h-40 bg-white rounded-xl border border-gray-300 flex flex-col gap-4 justify-center items-center'>
        <div>
        <PenBox size={32} className='m-auto text-green700'/>
        </div>
        <h1 className='text-xl text-center'>Create Course</h1>
    </div>
  )
}

export default CreateCourse