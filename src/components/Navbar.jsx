import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function Navbar({ navigateTo, onLoginClick, onUploadClick, onAdminClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentUser, logout, isAdmin } = useAuth()

  const handleNavClick = (view, subject = '') => {
    navigateTo(view, subject)
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  const handleLogout = async () => {
    try {
      await logout()
      setIsMenuOpen(false)
    } catch (error) {
      console.error('Failed to logout:', error)
    }
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
          <div className="hidden md:flex items-center space-x-6">
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
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={onUploadClick}
                  className="bg-blue-500 bg-opacity-80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-opacity-90 hover:bg-blue-400 transition-all duration-200 flex items-center gap-2 border border-blue-300 border-opacity-50 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Upload Note
                </button>
                
                {/* Admin Button - Only show for admin users */}
                {isAdmin && (
                  <button
                    onClick={onAdminClick}
                    className="bg-purple-500 bg-opacity-80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-opacity-90 hover:bg-purple-400 transition-all duration-200 flex items-center gap-2 border border-purple-300 border-opacity-50 shadow-sm"
                    title="Admin Dashboard"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Admin
                  </button>
                )}
                
                <div className="text-white text-opacity-90">Welcome, {currentUser.email}</div>
                <button
                  onClick={handleLogout}
                  className="text-blue-200 hover:text-white transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Sign In
              </button>
            )}
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
              
              {currentUser ? (
                <>
                  <button
                    onClick={() => {
                      onUploadClick()
                      setIsMenuOpen(false)
                    }}
                    className="text-left bg-blue-500 bg-opacity-80 text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 border border-blue-300 border-opacity-50"
                  >
                    Upload Note
                  </button>
                  
                  {/* Admin Button for Mobile - Only show for admin users */}
                  {isAdmin && (
                    <button
                      onClick={() => {
                        onAdminClick()
                        setIsMenuOpen(false)
                      }}
                      className="text-left bg-purple-500 bg-opacity-80 text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 border border-purple-300 border-opacity-50"
                    >
                      Admin Dashboard
                    </button>
                  )}
                  
                  <div className="py-2">
                    <p className="text-sm mb-2">Signed in as {currentUser.displayName || currentUser.email}</p>
                    <button
                      onClick={handleLogout}
                      className="text-sm hover:text-blue-200 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    onLoginClick()
                    setIsMenuOpen(false)
                  }}
                  className="text-left bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
