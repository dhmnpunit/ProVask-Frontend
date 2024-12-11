import React from 'react'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import GreenImage from '../assets/greenFrame.png'

function Features() {
  return (
    <>
    <svg
        className="w-full h-auto transform translate-y-1"
        viewBox="0 0 1440 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M0 70L48 80.7C96 91 192 113 288 91.3C384 70 480 5.99996 576 0.699962C672 -5.00004 768 49 864 59.3C960 70 1056 38 1152 43.3C1248 49 1344 91 1392 112.7L1440 134V166H1392C1344 166 1248 166 1152 166C1056 166 960 166 864 166C768 166 672 166 576 166C480 166 384 166 288 166C192 166 96 166 48 166H0V70Z"
        fill="#004724"
    />
    </svg>

    <div className="flex flex-col items-center h-features w-full bg-accent gap-32">
        <h1 className='text-5xl text-green200 font-bold mt-4'>Discover Our Features</h1>
        <div className='flex flex-col gap-12'>
        <Feature1 
            featureHeading="Game-Based Learning" 
            featureDescription="Dive into interactive games that make learning about herbs fun and rewarding, reinforcing your knowledge through quizzes and puzzles!"
            featurePoint1="→ Interactive Games, Quizzes and Simulations"
            featurePoint2="→ Reinforce Knowledge and Promoting Deeper Understanding"
            featurePoint3="→ Providing a personalized learning experience"
            featureImage={GreenImage}
        />
        <Feature2
            featureHeading="Virtual Library" 
            featureDescription="Access a wealth of resources, from textbooks to videos, tailored to your learning needs, supporting your herbology journey at every stage."
            featurePoint1="→ Access textbooks, videos, and articles"
            featurePoint2="→ Get personalized recommendations for effective learning"
            featurePoint3="→ Explore materials at your own pace"
            featureImage={GreenImage}
        />
        <Feature1
            featureHeading="Map Based Learning" 
            featureDescription="Explore unique herbs through an interactive map, discovering their geographical diversity and cultural significance in various regions."
            featurePoint1="→ Discover unique herbs from various regions"
            featurePoint2="→ Learn the historical significance of herbs"
            featurePoint3="→ Explore herbs that thrive in different climates"
            featureImage={GreenImage}       
        />
        <Feature2
            featureHeading="Personalized Dashboard" 
            featureDescription="Get a customized learning path that adapts to your interests and progress, tracking your journey and suggesting relevant resources."
            featurePoint1="→ Enjoy a customized learning journey"
            featurePoint2="→ Monitor your achievements and milestones"
            featurePoint3="→ Receive suggestions based on your interests"
            featureImage={GreenImage}
        />
        </div>

        
    </div>

    <svg
        className="w-full h-auto"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M0 32L48 53.3C96 75 192 117 288 128C384 139 480 117 576 128C672 139 768 181 864 176C960 171 1056 117 1152 96C1248 75 1344 85 1392 90.7L1440 96V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V32Z"
        fill="#004724"
    />
    </svg>
    </>
 
  )
}

export default Features