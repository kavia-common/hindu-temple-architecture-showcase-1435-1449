import React, { useState, useCallback } from 'react';

/**
 * Gallery page component showcasing a filterable collection of Hindu temple images.
 * Includes category filters and a lightbox modal for viewing details.
 */
// PUBLIC_INTERFACE
function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  /** Gallery items with emoji placeholders, categories, and descriptions */
  const galleryItems = [
    { id: 1, emoji: '🛕', title: 'Kandariya Mahadeva Temple', category: 'Nagara', location: 'Khajuraho, Madhya Pradesh', description: 'The largest and most ornate temple in the Khajuraho group, built c. 1025–1050 CE by the Chandela dynasty.' },
    { id: 2, emoji: '🏛️', title: 'Brihadeeswara Temple', category: 'Dravidian', location: 'Thanjavur, Tamil Nadu', description: 'A UNESCO World Heritage Site, this Chola masterpiece features a 66m vimana — the tallest in the world at the time of construction.' },
    { id: 3, emoji: '🌄', title: 'Kedarnath Temple', category: 'Himalayan', location: 'Uttarakhand', description: 'One of the holiest Hindu temples, set against the dramatic backdrop of the Himalayan peaks at 3,583m altitude.' },
    { id: 4, emoji: '🪷', title: 'Lotus Temple (BAPS)', category: 'Modern', location: 'New Delhi', description: 'A modern interpretation of temple architecture with lotus-petal forms, demonstrating continuity of tradition.' },
    { id: 5, emoji: '🏯', title: 'Hoysaleswara Temple', category: 'Vesara', location: 'Halebidu, Karnataka', description: 'A Hoysala masterpiece featuring 340 large relief sculptures and thousands of decorative carvings on a star-shaped platform.' },
    { id: 6, emoji: '🌅', title: 'Shore Temple', category: 'Dravidian', location: 'Mahabalipuram, Tamil Nadu', description: 'An early structural Dravidian temple from the 8th century, overlooking the Bay of Bengal.' },
    { id: 7, emoji: '🔱', title: 'Meenakshi Temple', category: 'Dravidian', location: 'Madurai, Tamil Nadu', description: 'One of the largest temple complexes in India with 14 towering gopurams covered in thousands of colorful sculptures.' },
    { id: 8, emoji: '☀️', title: 'Sun Temple', category: 'Nagara', location: 'Konark, Odisha', description: 'Designed as a colossal chariot of the Sun God with 24 intricately carved wheels and 7 horses, a UNESCO World Heritage Site.' },
    { id: 9, emoji: '🏔️', title: 'Badrinath Temple', category: 'Himalayan', location: 'Uttarakhand', description: 'One of the Char Dham pilgrimage sites, featuring colorful Himalayan temple architecture at 3,133m altitude.' },
    { id: 10, emoji: '🎭', title: 'Dakshineswar Kali Temple', category: 'Bengali', location: 'Kolkata, West Bengal', description: 'A famous 19th-century temple with classic nav-ratna (nine-spired) Bengali architecture.' },
    { id: 11, emoji: '🌊', title: 'Padmanabhaswamy Temple', category: 'Kerala', location: 'Thiruvananthapuram, Kerala', description: 'An ancient temple with distinctive Kerala architectural style, housing one of the world\'s richest treasuries.' },
    { id: 12, emoji: '⛩️', title: 'Akshardham Temple', category: 'Modern', location: 'New Delhi', description: 'A modern temple showcasing traditional architecture techniques — built using 6,000 tonnes of pink sandstone without steel.' },
  ];

  /** Available filter categories derived from gallery items */
  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

  /** Filtered items based on active category */
  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // PUBLIC_INTERFACE
  /** Open lightbox with selected gallery item */
  const openLightbox = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  // PUBLIC_INTERFACE
  /** Close the lightbox modal */
  const closeLightbox = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Temple Gallery</h1>
          <p>
            Browse our curated collection of Hindu temples representing diverse
            architectural styles from across the subcontinent.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                className="gallery-item"
                key={item.id}
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View details of ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(item);
                  }
                }}
              >
                <div className="gallery-item-image">{item.emoji}</div>
                <div className="gallery-item-info">
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginTop: '32px' }}>
              No temples found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${selectedItem.title}`}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image">{selectedItem.emoji}</div>
            <div className="lightbox-info">
              <h3>{selectedItem.title}</h3>
              <p style={{ color: 'var(--color-accent-dark)', fontWeight: '500', marginBottom: '8px' }}>
                📍 {selectedItem.location}
              </p>
              <p>{selectedItem.description}</p>
              <span className="card-tag">{selectedItem.category}</span>
            </div>
          </div>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
