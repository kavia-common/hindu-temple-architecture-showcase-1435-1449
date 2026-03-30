import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Styles from './pages/Styles';
import Elements from './pages/Elements';
import Gallery from './pages/Gallery';
import FamousTemples from './pages/FamousTemples';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

/**
 * Main App component — renders the top-level layout with routing.
 * Includes the Navbar, page routes, and Footer shared across all pages.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/famous-temples" element={<FamousTemples />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
