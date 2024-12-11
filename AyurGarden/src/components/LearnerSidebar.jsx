import React from 'react'
import Logo from "../assets/ayurgarden-logo.svg";
import { Link } from "react-router-dom";
import LearnerSidebarFeature from './SidebarFeature';
import { Gamepad, GraduationCap, LibraryBig, ScatterChart, User } from 'lucide-react';

function LearnerSidebar() {
  return (
    <div className='bg-white w-72 h-screen '>
        <div className='h-16 border border-gray-200 flex items-center justify-center'>
            <Link to="/" className="text-accent hover:text-black cursor-pointer transition-colors">
                <img className="h-10 w-10" src={Logo} alt="" />
            </Link>
        </div>
        <div className='flex flex-col h-[calc(100%-4rem)] justify-between'>
            <div className='p-2'>
                <LearnerSidebarFeature icon={ScatterChart} title="Overview" />
                <LearnerSidebarFeature icon={GraduationCap} title="Courses" />
                <LearnerSidebarFeature icon={LibraryBig} title="Virtual Library" />
                <LearnerSidebarFeature icon={Gamepad} title="Herbal Games" />
            </div>
            <div className='p-2 flex items-end'>
                <LearnerSidebarFeature icon={User} title="Profile" />
            </div>
        </div>

        
    </div>
  )
}

export default LearnerSidebar