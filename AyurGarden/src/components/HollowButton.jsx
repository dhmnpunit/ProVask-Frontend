import React from 'react'

function HollowButton(props) {
  return (
    <button className='border border-accent hover:bg-white text-accent px-9 py-4 rounded-xl '>{props.buttonName}</button>
  )
}

export default HollowButton