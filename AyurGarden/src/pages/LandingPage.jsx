import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import MapFeatureSection from '../components/MapFeatureSection'
import FeaturedGamesSection from '../components/FeaturedGamesSection'
import VirtualLibrarySection from '../components/VirtualLibrarySection'
import Footer from '../components/Footer'


function LandingPage() {
  return (
    <>
        <Header/>
        <div className="pt-16">
            <Hero/>
            <Features/>
            <MapFeatureSection/>
            <FeaturedGamesSection/>
            <VirtualLibrarySection/>
            <Footer/>
        </div>
        
    </>
  )
}

export default LandingPage