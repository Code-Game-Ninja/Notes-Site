
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotesList from './components/NotesList'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [subject, setSubject] = useState('')

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
    <>
      <Navbar navigateTo={navigateTo} />
      {currentView === 'home' && <Home navigateTo={navigateTo} />}
      {currentView === 'about' && <About />}
      {currentView === 'contact' && <Contact />}
      {currentView === 'notes' && <NotesList subject={subject} navigateTo={navigateTo} />}
      <Footer navigateTo={navigateTo} />
    </>
  )
}

export default App
