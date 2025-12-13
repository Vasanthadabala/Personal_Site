import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} scrollToSection={scrollToSection} />
      <main>
        <Profile scrollToSection={scrollToSection} />
        <About scrollToSection={scrollToSection} />
        <SkillsSection scrollToSection={scrollToSection} />
        <Projects />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;