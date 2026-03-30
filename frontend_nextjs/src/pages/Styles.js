import React from 'react';

/**
 * Styles page component detailing the major Hindu temple architectural styles
 * including Nagara, Dravidian, Vesara, and regional variations.
 */
// PUBLIC_INTERFACE
function Styles() {
  /** Data for each major architectural style */
  const styles = [
    {
      icon: '🔺',
      name: 'Nagara (North Indian)',
      description:
        'The Nagara style dominates North India, characterized by a curvilinear tower (shikhara) that rises in a beehive shape over the garbhagriha. The plan is generally based on a square with successive projections giving a cruciform shape at the base.',
      features: [
        'Curvilinear (beehive-shaped) shikhara',
        'No boundary walls or gateways in early examples',
        'Square sanctum at the base',
        'Multiple sub-shrines clustered around main spire',
        'Rich exterior carvings and sculptures',
      ],
      examples: 'Kandariya Mahadeva (Khajuraho), Lingaraja Temple (Bhubaneswar), Sun Temple (Modhera)',
    },
    {
      icon: '🔻',
      name: 'Dravidian (South Indian)',
      description:
        'The Dravidian style dominates South India, distinguished by its pyramid-shaped vimana (tower) composed of progressively smaller stories. The grand gopurams (entrance gateways) are often the tallest and most ornate structures in the temple complex.',
      features: [
        'Pyramid-shaped vimana tower',
        'Elaborate gopuram gateways',
        'Large enclosed courtyards',
        'Massive temple tank (pushkarini)',
        'Pillared halls (mandapams) with intricate carvings',
      ],
      examples: 'Brihadeeswara Temple (Thanjavur), Meenakshi Temple (Madurai), Shore Temple (Mahabalipuram)',
    },
    {
      icon: '⬡',
      name: 'Vesara (Hybrid / Deccan)',
      description:
        'The Vesara style is a hybrid that combines elements of both Nagara and Dravidian traditions, primarily found in the Deccan Plateau region. It emerged under the Chalukya and Hoysala dynasties.',
      features: [
        'Blend of curved and stepped tower forms',
        'Star-shaped or polygonal plan',
        'Extremely detailed sculptural ornamentation',
        'Low platform base (jagati)',
        'Lathe-turned pillar designs',
      ],
      examples: 'Hoysaleswara Temple (Halebidu), Chennakesava Temple (Belur), Durga Temple (Aihole)',
    },
    {
      icon: '🏔️',
      name: 'Himalayan / Pahari',
      description:
        'Found in the hill states of northern India and Nepal, this style adapts to the mountainous terrain. Temples feature sloping wooden roofs, pagoda-like structures, and extensive use of local timber and stone.',
      features: [
        'Pagoda-style multi-tiered roofs',
        'Extensive use of wood and stone',
        'Adapted to mountainous terrain',
        'Compact and vertically oriented design',
        'Intricate wood carvings on facades',
      ],
      examples: 'Hadimba Temple (Manali), Kedarnath Temple, Pashupatinath Temple (Kathmandu)',
    },
    {
      icon: '🌊',
      name: 'Kerala Style',
      description:
        'Kerala\'s temples are uniquely adapted to the tropical climate with sloping tiled roofs, copper-clad surfaces, and relatively simple exteriors concealing richly decorated interiors. The "Koothambalam" (temple theater) is a distinctive feature.',
      features: [
        'Sloping metal or tiled roofs',
        'Circular or square sanctum (sreekovil)',
        'Rich mural paintings inside',
        'Temple theater (Koothambalam)',
        'Extensive use of laterite stone and wood',
      ],
      examples: 'Padmanabhaswamy Temple (Trivandrum), Guruvayur Temple, Vadakkunnathan Temple',
    },
    {
      icon: '🏯',
      name: 'Bengali / Bangla Style',
      description:
        'Originating in Bengal, this style features distinctive curved roofs that mimic the shape of bamboo huts. The terracotta facades depict mythological scenes and floral patterns in exquisite detail.',
      features: [
        'Curved "chala" roofs (do-chala, char-chala, at-chala)',
        'Elaborate terracotta relief panels',
        'Relatively smaller scale',
        'Rich narrative panels depicting epics',
        'Brick and laterite construction',
      ],
      examples: 'Dakshineswar Kali Temple, Bishnupur Temples, Kantaji Temple (Bangladesh)',
    },
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Architectural Styles</h1>
          <p>
            Discover the major regional styles that define Hindu temple architecture across the
            Indian subcontinent and beyond.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          {styles.map((style, index) => (
            <div className="info-block" key={index}>
              <div className="info-block-icon">{style.icon}</div>
              <div className="info-block-content">
                <h3>{style.name}</h3>
                <p>{style.description}</p>
                <ul>
                  {style.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '12px', fontSize: '0.9rem' }}>
                  <strong>Examples:</strong> {style.examples}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Styles;
