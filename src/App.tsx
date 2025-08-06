import { useState, useEffect } from 'react'
import './App.css'
import Info from './components/home/Info'
import Experience from './components/home/Experience'
import Education from './components/home/Education'
import Skills from './components/home/Skills'
import Project from './components/home/Project'
import NavButtons from './components/home/NavButtons'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Info/>
      <NavButtons />
      <Experience/>
      <Education/>
      <Skills/>
      <Project/>
      {showScrollTop && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        ></button>
      )}
    </div>
  )
}

export default App
