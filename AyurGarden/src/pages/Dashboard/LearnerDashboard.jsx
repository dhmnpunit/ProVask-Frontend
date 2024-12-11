import React from 'react'
import LearnerSidebar from '../../components/LearnerSidebar'
import Overview from '../../components/Overview'

function LearnerDashboard() {
  return (
    <div className='flex'>
        <LearnerSidebar/>
        <Overview/>
    </div>

    
    
  )
}

export default LearnerDashboard