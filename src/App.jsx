
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotesList from './components/NotesList'
import Footer from './components/Footer'
import Login from './components/Login'
import UploadNote from './components/UploadNote'
import AdminDashboard from './components/AdminDashboard'
import { useState, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [subject, setSubject] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/' || path === '/home') {
      setCurrentView('home')
    } else if (path === '/about') {
      setCurrentView('about')
    } else if (path === '/contact') {
      setCurrentView('contact')
    } else if (path.startsWith('/computer-networks')) {
      setCurrentView('notes')
      setSubject('computer-networks')
    } else if (path.startsWith('/software-engineering')) {
      setCurrentView('notes')
      setSubject('software-engineering')
    } else if (path.startsWith('/toc')) {
      setCurrentView('notes')
      setSubject('toc')
    } else if (path.startsWith('/computer-graphics')) {
      setCurrentView('notes')
      setSubject('computer-graphics')
    } else if (path.startsWith('/pyq-papers')) {
      setCurrentView('notes')
      setSubject('pyq-papers')
    }
  }, [])

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/' || path === '/home') {
        setCurrentView('home')
        setSubject('')
      } else if (path === '/about') {
        setCurrentView('about')
        setSubject('')
      } else if (path === '/contact') {
        setCurrentView('contact')
        setSubject('')
      } else if (path.startsWith('/computer-networks')) {
        setCurrentView('notes')
        setSubject('computer-networks')
      } else if (path.startsWith('/software-engineering')) {
        setCurrentView('notes')
        setSubject('software-engineering')
      } else if (path.startsWith('/toc')) {
        setCurrentView('notes')
        setSubject('toc')
      } else if (path.startsWith('/computer-graphics')) {
        setCurrentView('notes')
        setSubject('computer-graphics')
      } else if (path.startsWith('/pyq-papers')) {
        setCurrentView('notes')
        setSubject('pyq-papers')
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigateTo = (view, subjectName = '') => {
    setCurrentView(view)
    setSubject(subjectName)
    // Update URL without page reload
    const newPath = view === 'home' ? '/' : `/${view}`
    window.history.pushState(null, '', newPath)
  }

  return (
    <AuthProvider>
      <Navbar 
        navigateTo={navigateTo} 
        onLoginClick={() => setShowLogin(true)}
        onUploadClick={() => setShowUpload(true)}
        onAdminClick={() => setShowAdmin(true)}
      />
      {currentView === 'home' && <Home navigateTo={navigateTo} />}
      {currentView === 'about' && <About />}
      {currentView === 'contact' && <Contact />}
      {currentView === 'notes' && <NotesList subject={subject} navigateTo={navigateTo} />}
      <Footer navigateTo={navigateTo} />
      
      {showLogin && (
        <Login 
          navigateTo={navigateTo}
          onClose={() => setShowLogin(false)} 
        />
      )}
      
      {showUpload && (
        <UploadNote 
          onClose={() => setShowUpload(false)}
          onUploadSuccess={() => {
            // Optionally refresh the notes list
            console.log('Upload successful!')
          }}
        />
      )}

      {showAdmin && (
        <AdminDashboard 
          onClose={() => setShowAdmin(false)}
        />
      )}
    </AuthProvider>
  )
}

export default App
