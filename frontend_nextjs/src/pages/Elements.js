import React from 'react';

/**
 * Elements page component describing the key structural and decorative
 * elements that constitute a Hindu temple.
 */
// PUBLIC_INTERFACE
function Elements() {
  /** Data for each architectural element */
  const elements = [
    {
      icon: '🔝',
      name: 'Shikhara / Vimana',
      description:
        'The tower or spire that rises above the sanctum sanctorum. In Nagara style it is called Shikhara (curvilinear), while in Dravidian style it is called Vimana (pyramidal). It symbolizes Mount Meru, the cosmic axis connecting earth and heaven.',
    },
    {
      icon: '🚪',
      name: 'Garbhagriha (Sanctum Sanctorum)',
      description:
        'The innermost and most sacred chamber of the temple, housing the principal deity. It is typically a small, dark, windowless room symbolizing the womb (garbha) of the universe from which creation emerges.',
    },
    {
      icon: '🏛️',
      name: 'Mandapa (Pillared Hall)',
      description:
        'The pillared hall or pavilion used for gatherings, rituals, dance, and music. Many temples have multiple mandapas — the mukha-mandapa (entrance hall), maha-mandapa (great hall), and nritya-mandapa (dance hall).',
    },
    {
      icon: '🚩',
      name: 'Gopuram (Entrance Gateway)',
      description:
        'The monumental entrance tower found primarily in Dravidian temples of South India. Gopurams are richly decorated with thousands of painted sculptures depicting gods, goddesses, and mythological narratives.',
    },
    {
      icon: '🔄',
      name: 'Pradakshina Patha (Circumambulatory Path)',
      description:
        'The passage encircling the garbhagriha, enabling devotees to walk clockwise around the deity as an act of devotion (pradakshina). The walls of this path are often adorned with relief carvings.',
    },
    {
      icon: '🪨',
      name: 'Adhishthana (Platform Base)',
      description:
        'The raised platform or plinth on which the temple is built, often featuring elaborate moldings. It elevates the temple both physically and symbolically, separating the sacred space from the mundane world.',
    },
    {
      icon: '💧',
      name: 'Temple Tank (Pushkarini)',
      description:
        'A sacred water body within the temple complex used for ritual bathing and religious ceremonies. Temple tanks are architectural feats in themselves, with stepped sides and shrines around the periphery.',
    },
    {
      icon: '🪷',
      name: 'Amalaka',
      description:
        'A ribbed, disc-like stone placed at the top of the Nagara-style shikhara, below the finial (kalasha). It is shaped like the Indian gooseberry (amla) fruit and represents the sun or the cosmic lotus.',
    },
    {
      icon: '🏺',
      name: 'Kalasha (Finial)',
      description:
        'The pot-shaped finial crowning the temple tower. It is considered highly auspicious and symbolizes the fullness of creation. The kalasha is often made of metal and placed during a consecration ceremony.',
    },
    {
      icon: '🎨',
      name: 'Sculptural Decorations',
      description:
        'Hindu temples are renowned for their profuse sculptural programs depicting deities, celestial beings (apsaras, gandharvas), mythological scenes, animals, floral motifs, and geometric patterns. These serve both devotional and educational purposes.',
    },
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Temple Elements</h1>
          <p>
            Understand the key structural and decorative components that make up
            a Hindu temple — each carrying deep symbolic significance.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid-2">
            {elements.map((element, index) => (
              <div className="info-block" key={index} style={{ marginBottom: '0' }}>
                <div className="info-block-icon">{element.icon}</div>
                <div className="info-block-content">
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Elements;
