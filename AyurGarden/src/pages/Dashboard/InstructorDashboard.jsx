
import React from 'react'
import Sidebar from '../../components/LearnerSidebar'
import CreateCourse from '../../components/CreateCourse'
import { Link } from 'react-router-dom'


function InstructorDashboard() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='p-16'>
            <Link to="/instructor-dashboard/create-course" >
                <CreateCourse/>
            </Link>
        </div>
    </div>
  )
}

export default InstructorDashboard