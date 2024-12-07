import React from 'react'

export const InputField = ({
    label="label",
    placeholder="placeholder",
    type="text",
    id = 'id',
    name = 'name',
}) => {
  return (

    <div className='mb-4'>
        <label htmlFor='username' className='block text-sm font-medium text-gray-900'>{label}</label>
        <input type={type} id={id} name={name} placeholder={placeholder} className='mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm'/>
    </div> 

  )
}
