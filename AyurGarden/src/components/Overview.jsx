import { Goal } from 'lucide-react'
import React from 'react'



function Overview() {
  return (
    <div className='w-full p-16'>
        <div>
            <div className='w-96 h-32 border border-gray-300 bg-white rounded-xl p-4 flex flex-col gap-4'>
                <div className='flex gap-2 '>
                    <Goal />
                    <span className='font-bold'>Daily Goal</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-500 text-sm'>20 mins left today</p>
                    <div className='h-2  bg-gray-200 rounded-lg'>
                        <div className='h-full w-4/5 rounded-lg bg-accent'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview

