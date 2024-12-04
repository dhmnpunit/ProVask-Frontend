import React from 'react'

function GreenButton(props) {
  return (
    <button className='bg-accent hover:bg-green-800 text-white px-9 py-4 rounded-xl '>{props.buttonName}</button>
  )
}

export default GreenButton