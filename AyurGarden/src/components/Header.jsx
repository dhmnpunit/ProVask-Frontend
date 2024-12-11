import Logo from "../assets/ayurgarden-logo.svg";
import { Link } from "react-router-dom";
import React from 'react'

function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-16 px-12 w-full bg-white items-center shadow-sm justify-between">

        <div className="ml-4">
          <Link to="/" className="text-accent hover:text-black cursor-pointer transition-colors">
            <img className="h-10 w-10" src={Logo} alt="" />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/learn" className="text-accent hover:text-black cursor-pointer transition-colors">
            <span>Learn</span>
          </Link>
          <Link to="/about" className="text-accent hover:text-black cursor-pointer transition-colors">
            <span>About us</span>
          </Link>
          <Link to="/signin" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
            <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out">Sign up / Login</button>
          </Link>
        </div>
      </div>
  )
}

export default Header