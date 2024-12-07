

import React from 'react'
import { InputField } from './InputField'
import HollowButton from '../../components/HollowButton'
import GreenButton from '../../components/GreenButton'

export const SignupForm = ({ toggleForm }) => {
  return (
    <div>
        <form className='w-login-signup-form h-rel p-8 bg-white border rounded-xl border-gray-300 shadow-lg flex flex-col gap-8'>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-accent font-bold text-3xl'>Create an Account</h1>
                <p className='text-gray-500 mt-4'>Join AyurGarden and start your herbal journey</p>
            </div>
            <div>
                <div className='flex gap-4'>
                    <InputField label='First Name' placeholder='John' type='text'/>
                    <InputField label='Last Name' placeholder='Doe' type='text'/>
                </div>
                <InputField label='Email' placeholder='john@example.com' type='email'/>
                <InputField label='Password' placeholder='••••••••' type='password'/>
            </div>
            <button className="bg-accent px-4 py-2 w-30 h-11 rounded-md text-white hover:bg-green-800 ease-out -mt-4 mb-4">Sign up</button>
            <div className='flex items-center justify-center -mt-4 mb-12'>
                <p className='text-sm text-gray-600'>Already have an account? <span className='text-accent font-bold underline hover:text-green600 cursor-pointer' onClick={toggleForm}>Login!</span></p>
            </div>
        </form>
    </div>
  )
}