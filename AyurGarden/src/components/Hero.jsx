import React from 'react'
import GreenButton from './GreenButton'
import HollowButton from './HollowButton'
import HeroPlant from '../assets/hero-plant.svg'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className="h-hero w-full flex items-center justify-between p-12">
        <div className="flex flex-col ml-24 gap-6">
            <h1 className='text-6xl font-bold max-w-647 text-accent'>Discover the Healing Power of Nature</h1>
            <p className='max-w-629 text-xl text-gray-600'>Embark on a journey through the world of herbal medicine. Learn, explore, and connect with nature's remedies in our interactive virtual garden.</p>
            <div className='flex gap-4'>
                <Link to="/learn">
                  <GreenButton buttonName="Start Learning"/>
                </Link>
                <Link to="/signin">
                  <HollowButton buttonName="Explore Library"/>
                </Link>
                
                
            </div>
        </div>
        <div>
            <img src={HeroPlant} alt="Plant Image" className="" />
        </div>
        
    </div>
  )
}

export default Hero