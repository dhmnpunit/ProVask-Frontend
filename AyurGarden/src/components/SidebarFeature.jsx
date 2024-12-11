import React from 'react'
import { Link } from 'react-router-dom'

function LearnerSidebarFeature({
    icon: Icon,
    title = "",
    link = "/"
}) {
  return (
    <div>
        <Link to={link} >
            <div className='w-full cursor-pointer p-4 rounded-lg transition-transform duration-300 hover:bg-gray-100 flex gap-4'>
                {Icon && <Icon size={24} />}
                <span>{title}</span>
            </div>
        </Link>
        
    </div>

  )
}

export default LearnerSidebarFeature