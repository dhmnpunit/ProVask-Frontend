import React from 'react'
import ArticleImage from '../assets/article.svg'

function MiniResourceCard({
    cardImage = ArticleImage,
    cardTitle = 'Card Title',
    cardType = 'Article / Video / E-Book',
}) {
  return (
    <div className='h-mini-resource-card w-mini-resource-card bg-white rounded-xl p-4 flex gap-4 shadow-md'>
        <div className='h-16 w-16 bg-green700 rounded-lg flex items-center justify-center' >
            <img src={cardImage} alt="" />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-accent'>{cardTitle}</h1>
            <p className='text-gray-600 text-14px'>{cardType}</p>
        </div>
    </div>
  )
}

export default MiniResourceCard