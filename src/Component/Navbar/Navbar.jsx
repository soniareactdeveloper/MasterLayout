
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-8 justify-center">
        <li>
          <Link to="/" className="text-white text-lg hover:text-blue-300 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-lg hover:text-blue-300 transition">About</Link>
        </li>
        <li>
          <Link to="/layout-two" className="text-white text-lg hover:text-blue-300 transition">Layout Two</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
