import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import MapFeatureSection from '../components/MapFeatureSection'


function LandingPage() {
  return (
    <>
        <Header/>
        <div className="pt-16">
            <Hero/>
            <Features/>
            <MapFeatureSection/>
        </div>
        
    </>
  )
}

export default LandingPage