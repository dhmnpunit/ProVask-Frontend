import React from 'react'
import GamesCard from './GamesCard'

function FeaturedGamesSection() {
  return (
    <>
        <svg 
          width="100%" 
          height="183" 
          viewBox="0 0 1440 183" 
          preserveAspectRatio="none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 13.7242L60 8.4242C120 2.7242 240 -7.2758 360 8.4242C480 24.7242 600 66.7242 720 72.4242C840 77.7242 960 45.7242 1080 45.7242C1200 45.7242 1320 77.7242 1380 93.7242L1440 109.724V182.5H1380C1320 182.5 1200 182.5 1080 182.5C960 182.5 840 182.5 720 182.5C600 182.5 480 182.5 360 182.5C240 182.5 120 182.5 60 182.5H0V13.7242Z" fill="#004724"/>
        </svg>

        <div className="h-featured-games-section w-full bg-accent -mt-5 flex flex-col items-center gap-16">
            <h1 className='text-5xl text-green200 font-bold mt-8'>Featured Games</h1>
            <div className='flex gap-8'>
                <GamesCard gameTitle='Game 1' gameDescription='Game 1 Description'/>
                <GamesCard gameTitle='Game 2' gameDescription='Game 2 Description'/>
                <GamesCard gameTitle='Game 3' gameDescription='Game 3 Description'/>

            </div>
        </div>

        <svg 
          width="100%" 
          height="100" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L60 21.3C120 43 240 85 360 96C480 107 600 85 720 80C840 75 960 85 1080 85.3C1200 85 1320 75 1380 69.3L1440 64V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="#004724"/>
        </svg>

    </>

  )
}

export default FeaturedGamesSection