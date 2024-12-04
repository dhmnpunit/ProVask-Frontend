import React from 'react'
import GamesCardImage from '../assets/games-card-image.png'


function GamesCard({
    gameTitle = "Game Title",
    gameDescription = "Game Description",
}) {
  return (
    <div className="h-games-card w-games-card bg-white rounded-xl overflow-hidden shadow-lg">
        <img src={GamesCardImage} alt="" />
        <div className="p-6 flex flex-col gap-2">
            <h1 className='text-xl font-bold text-accent'>{gameTitle}</h1>
            <p className='text-gray-600'>{gameDescription}</p>
            <button className="bg-accent px-4 py-2 w-full h-11 rounded-xl text-white hover:bg-green-800">Play Now</button>
        </div>
    </div>
  )
}

export default GamesCard