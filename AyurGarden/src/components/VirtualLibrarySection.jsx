import React from 'react'
import MiniResourceCard from './MiniResourceCard'
import ArticleImage from '../assets/article.svg'
import VideoImage from '../assets/video.svg'
import EBookImage from '../assets/ebook.svg'
import { Link } from 'react-router-dom'

function VirtualLibrarySection() {
  return (
    <div className="h-virtual-library w-full flex flex-col items-center justify-center gap-10">
        <h1 className='text-5xl text-accent font-bold mt-4 '>Virtual Library</h1>
        <div className='flex gap-6'>
            <MiniResourceCard cardImage={ArticleImage} cardTitle='Introduction to Herbalism' cardType='Article'/>
            <MiniResourceCard cardImage={VideoImage} cardTitle='Medicinal Plants of the Amazon' cardType='Video'/>
            <MiniResourceCard cardImage={EBookImage} cardTitle='The Complete Herbal Guide' cardType='E-Book'/>
        </div>
        <Link to="/signin">
          <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out">Explore Full Library</button>
        </Link>

    </div>
  )
}

export default VirtualLibrarySection