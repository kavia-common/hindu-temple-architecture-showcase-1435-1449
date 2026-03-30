import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar component providing site-wide navigation.
 * Includes responsive mobile menu toggle and active link highlighting.
 */
// PUBLIC_INTERFACE
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /** Navigation link items */
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/styles', label: 'Styles' },
    { path: '/elements', label: 'Elements' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/famous-temples', label: 'Famous Temples' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  // PUBLIC_INTERFACE
  /** Toggle the mobile navigation menu open/closed */
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
          <span className="navbar-brand-icon" role="img" aria-label="Temple">🛕</span>
          <span>Temple Architecture</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
