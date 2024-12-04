import Logo from "../assets/react.svg";

import React from 'react'

function Header() {
  return (
    <div className="fixed top-0 left-0 flex h-16 px-12 w-full bg-white items-center shadow-sm justify-between">
        <div>
            <img src={Logo} alt="" />
        </div>
        <div className="flex gap-8 items-center">
            <ul className="flex gap-10">
                <li className="text-accent hover:text-black cursor-pointer">Learn</li>
                <li className="text-accent hover:text-black cursor-pointer">About Us</li>
                <li className="text-accent hover:text-black cursor-pointer">Explore Library</li>
            </ul>
            <button className="bg-accent px-4 py-2 w-30 h-11 rounded-xl text-white hover:bg-green-800 ease-out">Sign up / Login</button>
        </div>

    </div>
  )
}

export default Header