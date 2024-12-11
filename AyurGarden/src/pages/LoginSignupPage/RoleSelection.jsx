import React from 'react'
import UserRole from './UserRole'
import { Link } from 'react-router-dom'

function RoleSelection() {
  return (
    <div className='h-screen w-screen pt-16 flex justify-center items-center gap-6'>
        <Link to="/learner-dashboard">
            <UserRole icon='https://cdn-icons-png.flaticon.com/512/5404/5404967.png' role='Learner' description='Access courses and track your progress'/>
        </Link>
        <Link to="/instructor-dashboard">
            <UserRole icon='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' role='Instructor' description='Create and Manage Courses'/>
        </Link>
        
    </div>
  )
}

export default RoleSelection