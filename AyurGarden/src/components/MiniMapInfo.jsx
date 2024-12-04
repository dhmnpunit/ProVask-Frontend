import React from 'react'

function MiniMapInfo({
    region = "Region",
    regionInformation = "Herbal Information about the Region",
    commonlyUsedHerb1 = "Commonly Used Herb 1 - information",
    commonlyUsedHerb2 = "Commonly Used Herb 2 - information",
    commonlyUsedHerb3 = "Commonly Used Herb 3 - information",
    
}) {
  return (
    <div className='h-full w-mini-region-info-width bg-white rounded-xl shadow-md px-8 py-8 flex flex-col gap-3'>
        <h1 className='text-xl font-bold text-accent'>{region}</h1>
        <p className='text-gray-600'>{regionInformation}</p>
        <div>
            <p className='font-bold text-accent'>Commonly Used Herbs</p>
            <ul className='text-gray-600 list-disc ml-4'>
                <li>{commonlyUsedHerb1}</li>
                <li>{commonlyUsedHerb2}</li>
                <li>{commonlyUsedHerb3}</li>
            </ul>           
        </div>
        <button className="bg-accent px-4 py-2 w-full h-11 rounded-xl text-white hover:bg-green-800">Explore Region</button>
    </div>
  )
}

export default MiniMapInfo