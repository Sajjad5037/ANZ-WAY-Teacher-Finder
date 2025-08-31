import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              Homebridge Clone
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-primary-dark px-3 py-2 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-primary-dark px-3 py-2 rounded"
              >
                Courses
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/about"
                className="hover:text-primary-dark px-3 py-2 rounded flex items-center"
              >
                About Us
              </Link>
              {/* Example of submenu */}
              <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[150px] z-10">
                <li>
                  <Link
                    to="/about/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/mission"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Mission
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-dark px-3 py-2 rounded"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="hidden md:flex space-x-6 items-center">
  <li>
    <Link
      to="/"
      className="px-3 py-2 rounded hover:text-primary-dark font-bold"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/courses"
      className="px-3 py-2 rounded hover:text-primary-dark font-bold"
    >
      Courses
    </Link>
  </li>
  <li className="relative group flex items-center">
    <Link
      to="/about"
      className="px-3 py-2 rounded hover:text-primary-dark flex items-center font-bold"
    >
      About Us
      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
    {/* Dropdown */}
    <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[150px] z-10">
      <li>
        <Link
          to="/about/team"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Our Team
        </Link>
      </li>
      <li>
        <Link
          to="/about/mission"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Our Mission
        </Link>
      </li>
    </ul>
  </li>
  <li>
    <Link
      to="/contact"
      className="px-3 py-2 rounded hover:text-primary-dark font-bold"
    >
      Contact
    </Link>
  </li>
</ul>

      )}
    </nav>
  );
}
