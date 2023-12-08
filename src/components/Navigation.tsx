import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-400 text=white">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <NavLink to="/" className="mr-2">
          Home
        </NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </span>
    </nav>
  )
}

export default Navigation
