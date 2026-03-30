import React from 'react';

/**
 * Famous Temples page component showcasing notable Hindu temples
 * with descriptions, locations, and architectural significance.
 */
// PUBLIC_INTERFACE
function FamousTemples() {
  /** Famous temple data */
  const temples = [
    {
      emoji: '🛕',
      name: 'Brihadeeswara Temple',
      location: 'Thanjavur, Tamil Nadu',
      style: 'Dravidian',
      period: '1010 CE (Chola Dynasty)',
      description:
        'One of the largest South Indian temples, the Brihadeeswara is a UNESCO World Heritage Site. Its vimana stands at 66 meters, and the entire structure was built from granite using interlocking techniques without mortar. The massive Nandi sculpture weighing 25 tonnes guards the entrance.',
    },
    {
      emoji: '☀️',
      name: 'Sun Temple, Konark',
      location: 'Konark, Odisha',
      style: 'Kalinga (Nagara variant)',
      period: '13th century CE (Eastern Ganga Dynasty)',
      description:
        'Designed as a massive chariot for the Sun God Surya, this UNESCO site features 24 elaborately carved stone wheels, each over 3 meters in diameter, and is drawn by seven horses. The temple\'s alignment ensures that the first rays of sunrise illuminate the entrance.',
    },
    {
      emoji: '🔱',
      name: 'Meenakshi Amman Temple',
      location: 'Madurai, Tamil Nadu',
      style: 'Dravidian',
      period: '6th century CE onwards (Pandya / Nayak dynasties)',
      description:
        'A vast complex spread over 14 acres, featuring 14 gopurams (the tallest rising 52 meters) adorned with approximately 33,000 sculptures. The temple is dedicated to Goddess Meenakshi and Lord Sundareswarar.',
    },
    {
      emoji: '🏛️',
      name: 'Kandariya Mahadeva Temple',
      location: 'Khajuraho, Madhya Pradesh',
      style: 'Nagara',
      period: 'c. 1025–1050 CE (Chandela Dynasty)',
      description:
        'The largest and most ornate temple in the Khajuraho group, standing 31 meters tall. Known for its exquisite sculptural program featuring over 800 sculptures depicting gods, celestial beings, and scenes of daily life.',
    },
    {
      emoji: '🏯',
      name: 'Hoysaleswara Temple',
      location: 'Halebidu, Karnataka',
      style: 'Vesara (Hoysala)',
      period: '12th century CE (Hoysala Dynasty)',
      description:
        'Built on a star-shaped platform, this temple is a masterclass in sculptural art. Every inch of the exterior walls is covered with friezes depicting Hindu epics, animals, birds, and dancing figures. It took over 86 years to build.',
    },
    {
      emoji: '🌊',
      name: 'Padmanabhaswamy Temple',
      location: 'Thiruvananthapuram, Kerala',
      style: 'Kerala / Dravidian blend',
      period: '16th century CE (Travancore Kingdom)',
      description:
        'Famous for its treasure vaults (estimated at over $22 billion in value), this temple blends Kerala and Dravidian styles. The 100-foot gopuram leads to an ancient complex housing a massive reclining Vishnu deity.',
    },
    {
      emoji: '🏔️',
      name: 'Kedarnath Temple',
      location: 'Kedarnath, Uttarakhand',
      style: 'Himalayan',
      period: '8th century CE',
      description:
        'Perched at 3,583 meters in the Himalayas, Kedarnath is one of the twelve Jyotirlingas and part of the Char Dham pilgrimage. Built with massive stone slabs, it has withstood centuries of harsh mountain weather and even survived the devastating 2013 floods.',
    },
    {
      emoji: '⛩️',
      name: 'Akshardham Temple',
      location: 'New Delhi',
      style: 'Modern composite',
      period: '2005 CE (BAPS Swaminarayan)',
      description:
        'A modern architectural marvel built using 6,000 tonnes of pink sandstone and Italian Carrara marble, entirely without steel. It features 20,000 sculpted figures and entered the Guinness Book of World Records as the world\'s largest comprehensive Hindu temple.',
    },
    {
      emoji: '🎭',
      name: 'Jagannath Temple',
      location: 'Puri, Odisha',
      style: 'Kalinga (Nagara variant)',
      period: '12th century CE (Eastern Ganga Dynasty)',
      description:
        'One of the Char Dham sites, the Jagannath Temple stands at 65 meters and is famous for its annual Rath Yatra (chariot festival). The temple\'s flag always flies against the wind direction — a phenomenon that continues to intrigue visitors.',
    },
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Famous Hindu Temples</h1>
          <p>
            Explore some of the most celebrated Hindu temples, each a testament to
            the artistry, devotion, and engineering genius of their builders.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid-3">
            {temples.map((temple, index) => (
              <div className="temple-card" key={index}>
                <div className="temple-card-image">{temple.emoji}</div>
                <div className="temple-card-body">
                  <h3>{temple.name}</h3>
                  <p className="temple-location">📍 {temple.location}</p>
                  <p>{temple.description}</p>
                  <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="card-tag">{temple.style}</span>
                    <span className="card-tag" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: 'var(--color-accent-dark)' }}>
                      {temple.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FamousTemples;
