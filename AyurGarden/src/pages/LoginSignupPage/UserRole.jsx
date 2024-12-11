import React from 'react'
import GraduationCap from "../../assets/graduate.svg"


function UserRole({
    icon="icon",
    role="role",
    description="user-description",}) {
  return (
    <div className='w-60 h-48 bg-white flex flex-col justify-center items-center rounded-xl shadow.md border border-gray-300 gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'>
        <div className='h-12 w-12 '>
            <img src={icon} alt="" />
        </div>
        <h1 className='text-xl'>{role}</h1>
        <p className='text-center text-gray-500 text-sm'>{description}</p>
    </div>
  )
}

export default UserRole