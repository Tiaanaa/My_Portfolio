import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  
  return (
    
        <Router>
          
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
                 </Router>
     
  );
}

export default App;
 