import React from 'react'
import AboutUsHero from '../../components/AboutUsHero'
import AboutUsContent from '../../components/AboutUsContent'
import Footer from '../../components/Footer'

function AboutUs() {
  return (
    <>
    <div className='pt-28 px-10 gap-32 flex flex-col'>
        <AboutUsHero/>
        <AboutUsContent/>
        
    </div>
    <Footer/>
    </>

  )
}

export default AboutUs