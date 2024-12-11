import React from 'react'
import Header from '../components/Header'
import LearnHero from '../components/LearnHero'
import LearnFeaturedCourses from '../components/LearnFeaturedCourses'
import LearnLearningPaths from '../components/LearnLearningPaths'
import LearnResourceLibrary from '../components/LearnResourceLibrary'
import LearnQuickQuiz from '../components/LearnQuickQuiz'
import LearnHerbProfiles from '../components/LearnHerbProfiles'
import Footer from '../components/Footer'

function Learn() {
  return (
    <>  
      <div className='pt-28 px-10 '>
        <LearnHero/>
        <LearnFeaturedCourses/>
        <LearnLearningPaths/>
        <LearnResourceLibrary/>
        <LearnQuickQuiz/>
        <LearnHerbProfiles/>
      </div>
      <Footer/>

    </>
  )
}

export default Learn