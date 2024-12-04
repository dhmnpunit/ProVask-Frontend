import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import IndiaMap from '../assets/india-map1.svg'
import MiniMapInfo from './MiniMapInfo';

function MapFeatureSection() {
  return (
    <div className='h-map-feature-section w-full flex flex-col items-center gap-24'>
        <h1 className='text-5xl text-accent font-bold mt-4 '>Explore Herbs by Region</h1>
        <div className='flex items-center gap-20'>
            <div className='h-mini-map-height w-mini-map-width bg-green700 rounded-xl shadow-lg overflow-hidden items-center justify-center'>
                <TransformWrapper
                    options={{
                        limitToBounds: false,
                        minScale: 1,
                        maxScale: 10,
                        centerContent: true,
                        zoomAnimation: {
                        animationTime: 0.3, // Adjust the zoom animation time (in seconds)
                        animationType: 'ease-in-out',
                },
              }}
                >
                    <TransformComponent>
                        <img src={IndiaMap} alt="India Map" className="w-full h-full object-cover" />
                    </TransformComponent>
                </TransformWrapper>
            </div>
            <MiniMapInfo 
                region="Jammu & Kashmir" 
                regionInformation='Over 300 medicinal plants are reported in Jammu and Kashmir, with herbs being the most frequently used (85. 3% of the total). These plants are utilized in various traditional medicine systems, including Ayurveda and Unani.'
                commonlyUsedHerb1="Aconitum heterophyllum (Aconite): Known for its analgesic and anti-inflammatory properties."
                commonlyUsedHerb2="Withania somnifera (Ashwagandha): Used for its adaptogenic effects, helping to reduce stress and improve overall health."
                commonlyUsedHerb3="Berberis vulgaris (Barberry): Valued for its antibacterial and anti-inflammatory properties, often used in treating infections."
            />
        </div>
    </div>  
  )
}

export default MapFeatureSection