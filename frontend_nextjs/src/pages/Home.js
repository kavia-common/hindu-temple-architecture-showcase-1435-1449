import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page component — the main landing page of the Hindu Temple Architecture Showcase.
 * Displays a hero section, feature highlights, and an invitation to explore further.
 */
// PUBLIC_INTERFACE
function Home() {
  /** Feature cards data displayed on the home page */
  const features = [
    {
      icon: '🏛️',
      title: 'Architectural Styles',
      description: 'Explore Nagara, Dravidian, Vesara, and other regional temple styles that define India\'s architectural landscape.',
      link: '/styles',
    },
    {
      icon: '🔱',
      title: 'Temple Elements',
      description: 'Learn about the shikhara, mandapa, garbhagriha, and other key structural elements of Hindu temples.',
      link: '/elements',
    },
    {
      icon: '📷',
      title: 'Photo Gallery',
      description: 'Browse a curated visual gallery of stunning Hindu temples from across the subcontinent.',
      link: '/gallery',
    },
    {
      icon: '⭐',
      title: 'Famous Temples',
      description: 'Discover world-renowned Hindu temples and the stories behind their creation and significance.',
      link: '/famous-temples',
    },
  ];

  /** Highlight statistics */
  const stats = [
    { value: '2000+', label: 'Years of History' },
    { value: '6', label: 'Major Styles' },
    { value: '100+', label: 'UNESCO Sites' },
    { value: '30+', label: 'States & Regions' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>
            Discover the Art of{' '}
            <span className="highlight">Hindu Temple Architecture</span>
          </h1>
          <p>
            Journey through centuries of architectural brilliance — from towering gopurams
            to intricately carved shikharas. Explore the styles, elements, and masterpieces
            that make Hindu temples among the world's greatest architectural achievements.
          </p>
          <div className="hero-actions">
            <Link to="/gallery" className="btn btn-primary">
              🖼️ Explore Gallery
            </Link>
            <Link to="/about" className="btn btn-outline">
              📖 Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="feature-card">
                <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', fontFamily: 'var(--font-body)' }}>
                  {stat.value}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Explore Hindu Temple Heritage</h2>
            <div className="section-divider"></div>
            <p>
              Dive deep into the world of Hindu temple architecture through curated content,
              rich imagery, and detailed explorations of styles and elements.
            </p>
          </div>
          <div className="grid-4">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-gradient">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Begin Your Architectural Journey</h2>
          <div className="section-divider"></div>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            From ancient texts to standing monuments, uncover the philosophy and craftsmanship
            behind every temple.
          </p>
          <Link to="/styles" className="btn btn-primary">
            🏛️ Explore Architectural Styles
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
