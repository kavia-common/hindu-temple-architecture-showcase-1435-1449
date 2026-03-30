import React from 'react';

/**
 * About page component providing background information on Hindu temple architecture,
 * its history, significance, and the purpose of this showcase.
 */
// PUBLIC_INTERFACE
function About() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>About Hindu Temple Architecture</h1>
          <p>
            Understanding the spiritual, artistic, and engineering marvels that define one of
            humanity's greatest architectural traditions.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="info-block">
            <div className="info-block-icon">🕉️</div>
            <div className="info-block-content">
              <h3>A Living Tradition</h3>
              <p>
                Hindu temple architecture is one of the oldest and most sophisticated building
                traditions in the world, spanning over two millennia. Rooted in the ancient
                texts of the <em>Shilpa Shastras</em> and <em>Vastu Shastra</em>, every temple is
                designed as a microcosm of the universe — a bridge between the earthly and the divine.
              </p>
              <p>
                These temples are not merely places of worship; they are masterpieces of art,
                engineering, and philosophy. Each stone carving, spatial arrangement, and
                structural proportion carries deep symbolic meaning.
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block-icon">📜</div>
            <div className="info-block-content">
              <h3>Historical Overview</h3>
              <p>
                The earliest Hindu temples were rock-cut caves dating back to the 3rd century BCE.
                Over the centuries, freestanding structural temples emerged, evolving through
                distinct regional styles. The Gupta period (4th–6th century CE) is considered
                the golden age of temple architecture, laying the groundwork for the great
                temples of the medieval period.
              </p>
              <p>
                By the 7th to 13th centuries, temple architecture reached its zenith with
                monumental constructions such as the Brihadeeswara Temple, Khajuraho temples,
                and the Sun Temple at Konark, each pushing the boundaries of artistic
                expression and structural engineering.
              </p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block-icon">🎯</div>
            <div className="info-block-content">
              <h3>Purpose of This Showcase</h3>
              <p>
                This website serves as an educational resource dedicated to preserving and sharing
                knowledge about Hindu temple architecture. Our goal is to:
              </p>
              <ul>
                <li>Document and categorize different architectural styles</li>
                <li>Explain the symbolism behind key temple elements</li>
                <li>Provide visual references through a curated gallery</li>
                <li>Highlight famous temples and their historical significance</li>
                <li>Offer resources for further study and research</li>
              </ul>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block-icon">🌍</div>
            <div className="info-block-content">
              <h3>Global Influence</h3>
              <p>
                Hindu temple architecture has profoundly influenced building traditions across
                Southeast Asia. The grand temples of Angkor Wat in Cambodia, Prambanan in Indonesia,
                and the Cham temples of Vietnam all trace their architectural lineage to Hindu
                temple design principles. This global spread underscores the universality and
                enduring appeal of these architectural ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
