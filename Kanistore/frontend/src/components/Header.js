import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link to="/" className="text-lg font-medium text-gray-700 hover:text-green-500">
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-green-500">
            About
          </Link>
          <Link to="/country" className="text-lg font-medium text-gray-700 hover:text-green-500">
            Country
          </Link>
          <Link to="/services" className="text-lg font-medium text-gray-700 hover:text-green-500">
            Services
          </Link>
          <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-green-500">
            Contact
          </Link>
          <Link to="/events" className="text-lg font-medium text-gray-700 hover:text-green-500">
            Events
          </Link>
        </nav>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-4 py-2 rounded-full bg-green-500 text-white font-medium hover:bg-green-700"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
