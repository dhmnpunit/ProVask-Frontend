import React from 'react'


function LearnHero() {
  return (
    <div>
        <div className='h-rel w-full bg-accent rounded-xl p-6 flex flex-col gap-4 justify-center'>
        <h1 className='text-green800 font-bold text-160px leading-none'>Learn Herbology</h1>
        <p className=' text-primary max-w-629 pl-2'>Explore our comprehensive collection of courses, resources, and interactive content to deepen your understanding of herbal medicine and practices.</p>
        <div className='pl-2'>
            <button className="bg-green200 px-4 py-2 w-30 h-11 rounded-xl text-accent hover:bg-primary ease-out">Sign up / Login</button>
        </div>
        </div>
    </div>
  )
}

export default LearnHero