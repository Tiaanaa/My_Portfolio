import React, { useState } from 'react';
import { Link } from 'react-router';
import { FiMenu, FiX} from 'react-icons/fi';

const Nav = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <nav className="fixed w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
            <span className="text-2xl font-bold text-purple-400 pt-4">OC</span>
          

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-400">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-400">About</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-purple-400">Portfolio</Link>
            <Link to="/skills" className="text-gray-300 hover:text-purple-400">Skills</Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-400">Contact</Link>

           
          </div>

          {/* Mobile Menu Button */}
          
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" md:hidden flex items-center p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-purple-400">About</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Portfolio</Link>
            <Link to="/skills" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Skills</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
