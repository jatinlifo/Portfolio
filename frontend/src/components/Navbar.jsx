import React from 'react'
import { NavLink, Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='fixed left-0 right-0 top-0 z-50 bg-bg border-b border-soft'>
      <div className='max-w-6xl mx-auto px-4 py-4 md:px-8 h-16 flex justify-center gap-8 md:gap-0 md:justify-between'>
        <h1 className='font-bold text-xl md:text-2xl text-primary'>
          Profolio
        </h1>
        <ul className='flex gap-4 md:gap-20 md:text-xl text-primary'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ?
                  "font-bold underline text-muted hover:text-main transition"
                  : "font-bold hover:underline"}
            >
            Home
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ?
                  "font-bold underline text-muted hover:text-main transition"
                  : "font-bold hover:underline"}
            >
            Project
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ?
                  "font-bold underline text-muted hover:text-main transition"
                  : "font-bold hover:underline"}
            >
            About
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ?
                  "font-bold underline text-muted hover:text-main transition"
                  : "font-bold hover:underline"}
            >
            Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar