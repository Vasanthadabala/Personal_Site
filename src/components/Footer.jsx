import React from 'react';

const Footer = ({ scrollToSection }) => {
  const navLinks = ['about', 'experience', 'projects', 'contact'];

  return (
    <footer className="text-black py-4 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6 flex-wrap">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  className="capitalize hover:text-gray-600 text-lg transition"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm">&copy; 2026 Vasanth Adabala. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;