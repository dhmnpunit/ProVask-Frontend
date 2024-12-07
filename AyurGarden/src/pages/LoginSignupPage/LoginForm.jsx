
import React, { useState } from 'react'
import { InputField } from './InputField'

export const LoginForm = ({ toggleForm }) => {
  const [rememberMe, setRememberMe] = useState(false)

  const handleRememberMeClick = () => {
    setRememberMe(!rememberMe)
  }

  return (
    <div>
        <form className='w-login-signup-form h-rel p-8 bg-white border rounded-xl border-gray-300 shadow-lg flex flex-col'>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-accent font-bold text-3xl'>Welcome Back</h1>
                <p className='text-gray-500 mt-4'>Login to your AyurGarden account</p>
            </div>
            <div className='mt-8'>
                <InputField label='Email' placeholder='john@example.com' type='email'/>
                <InputField label='Password' placeholder='••••••••' type='password'/>
            </div>
            <div className='flex justify-between text-sm mb-2 -mt-2'>
                <div className='flex items-center gap-2 cursor-pointer' onClick={handleRememberMeClick}>
                    <div className={`h-4 w-4 border border-gray-600 rounded-sm ${rememberMe ? 'bg-accent' : ''}`}></div>
                    <span className='font-bold'>Remember me</span>
                </div>
                <span className='text-accent hover:text-green600 underline cursor-pointer'>Forgot Password?</span>
            </div>
            <button className="bg-accent px-4 py-2 w-30 h-11 rounded-md text-white hover:bg-green-800 ease-out mt-4 mb-10">Login</button>
            <div className='flex items-center justify-center -mt-4 mb-4'>
                <p className='text-sm text-gray-600'>Don't have an account? <span className='text-accent font-bold underline hover:text-green600 cursor-pointer' onClick={toggleForm}>Signup!</span></p>
            </div>
        </form>
    </div>
  )
}