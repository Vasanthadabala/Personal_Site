import React, { useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-between items-center px-8 lg:px-16 py-6 bg-white fixed top-0 w-full z-50">
        <div className="text-4xl ml-32 font-semibold text-gray-900">
          Vasanth
        </div>
        <ul className="flex space-x-2">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                className="text-gray-900 mr-16 hover:text-gray-600 transition text-2xl"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden flex justify-between items-center px-6 py-6 bg-white fixed top-0 w-full z-50">
        <div className="text-2xl font-semibold text-gray-900">
          Vasanth
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-1 p-2">
          <span className={`block w-6 h-0.5 bg-gray-800 transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {isOpen && (
          <ul className="absolute right-6 top-20 bg-white shadow-lg rounded-lg w-48 py-2 border border-gray-100">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    scrollToSection(link.toLowerCase().replace(' ', ''));
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;