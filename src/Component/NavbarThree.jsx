import { Link } from "react-router-dom"

const NavbarThree = () => {
  return (
    <nav className="bg-green-400 p-4">
    <ul className="flex space-x-8 justify-center">
      <li>
        <Link to="/" className="text-white text-lg hover:text-blue-300 transition">Home</Link>
      </li>
      <li>
        <Link to="hello" className="text-white text-lg hover:text-blue-300 transition">Hello</Link>
      </li>
      <li>
        <Link to="/layout-four" className="text-white text-lg hover:text-blue-300 transition">Layout four</Link>
      </li>
    </ul>
  </nav>
  )
}

export default NavbarThree