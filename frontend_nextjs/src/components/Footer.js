import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component displaying site information, quick links, and copyright.
 * Provides navigation to major sections and useful external links.
 */
// PUBLIC_INTERFACE
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🛕 Hindu Temple Architecture</h3>
            <p>
              Exploring the magnificent world of Hindu temple architecture — from ancient
              Dravidian towers to intricate Nagara spires. Discover the art, symbolism, and
              engineering that shaped some of the world's most awe-inspiring structures.
            </p>
          </div>

          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/styles">Architectural Styles</Link></li>
              <li><Link to="/elements">Temple Elements</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/famous-temples">Famous Temples</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Learn</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Hindu_temple_architecture" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
              <li><a href="https://www.britannica.com/art/Indian-architecture" target="_blank" rel="noopener noreferrer">Britannica</a></li>
              <li><a href="https://asi.nic.in/" target="_blank" rel="noopener noreferrer">ASI India</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hindu Temple Architecture Showcase. Built for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
