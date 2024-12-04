import PropTypes from 'prop-types'
import React from 'react'
import GreenImage from '../assets/greenFrame.png'

function Feature2({
    featureHeading = 'Feature Heading',
    featureDescription = 'Feature Description',
    featurePoint1 = 'Feature Point 1',
    featurePoint2 = 'Feature Point 2',
    featurePoint3 = 'Feature Point 3',
    featureImage = GreenImage,
}) {
  return (
    <div className='h-feature-height w-feature-width bg-primary rounded-xl p-8 flex justify-start gap-8'>
        <div>
            <img src={featureImage} />
        </div>
        <div>
            <h1 className='text-3xl font-bold text-accent'>{featureHeading}</h1>
            <p className='text-gray-600 my-4 max-w-feature-description mb-7'>{featureDescription}</p>
            <ul className='flex flex-col gap-3'>
                <li className='text-xl font-bold text-green600'>{featurePoint1}</li>
                <li className='text-xl font-bold text-green600'>{featurePoint2}</li>
                <li className='text-xl font-bold text-green600'>{featurePoint3}</li>
            </ul>
        </div>

    </div>
  )
}

Feature2.propTypes = {
    featureHeading: PropTypes.string,
    featureDescription: PropTypes.string,
    featurePoint1: PropTypes.string,
    featurePoint2: PropTypes.string,
    featurePoint3: PropTypes.string,
    featureImage: PropTypes.string
}


export default Feature2