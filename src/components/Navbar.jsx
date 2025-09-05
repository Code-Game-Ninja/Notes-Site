import React, { useState } from 'react'

const Navbar = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (view, subject = '') => {
    navigateTo(view, subject)
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold">Notes Hub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-blue-200 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left hover:text-blue-200 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left hover:text-blue-200 transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left hover:text-blue-200 transition-colors font-medium py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
