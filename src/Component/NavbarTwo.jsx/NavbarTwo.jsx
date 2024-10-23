import React from 'react'
import { Link } from 'react-router-dom'

const NavbarTwo = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-8 justify-center">
        <li>
          <Link to="/" className="text-white text-lg hover:text-blue-300 transition">Home</Link>
        </li>
        <li>
          <Link to="blog" className="text-white text-lg hover:text-blue-300 transition">Blog</Link>
        </li>
        <li>
          <Link to="contact" className="text-white text-lg hover:text-blue-300 transition">Contact</Link>
        </li>
        <li>
          <Link to="/layout-three" className="text-white text-lg hover:text-blue-300 transition">Layout Three</Link>
        </li>
      </ul>
  </nav>
  )
}

export default NavbarTwo