import React from 'react';

/**
 * Resources page component providing curated references, books, and online
 * resources for learning about Hindu temple architecture.
 */
// PUBLIC_INTERFACE
function Resources() {
  /** Books & texts */
  const books = [
    {
      title: 'The Hindu Temple (2 Volumes)',
      author: 'Stella Kramrisch',
      description: 'A foundational academic text exploring the symbolism, philosophy, and architecture of Hindu temples based on original Sanskrit texts.',
    },
    {
      title: 'Indian Temple Architecture: Form and Transformation',
      author: 'Adam Hardy',
      description: 'A comprehensive study of the morphological development of the Indian temple, tracing the evolution of regional styles through detailed analysis.',
    },
    {
      title: 'The Art and Architecture of the Indian Subcontinent',
      author: 'J.C. Harle',
      description: 'Part of the Pelican History of Art series, this book provides a broad survey of Indian art and architecture from the Indus Valley to the Mughal period.',
    },
    {
      title: 'Temple Architecture and Art of the Early Chalukyas',
      author: 'George Michell',
      description: 'A focused study on the remarkable temple-building activity of the early Chalukya dynasty in the Deccan region.',
    },
  ];

  /** Online resources */
  const onlineResources = [
    {
      title: 'Archaeological Survey of India (ASI)',
      url: 'https://asi.nic.in/',
      description: 'The official body responsible for conservation and protection of ancient monuments in India. Contains information on protected temple sites.',
    },
    {
      title: 'Wikipedia: Hindu Temple Architecture',
      url: 'https://en.wikipedia.org/wiki/Hindu_temple_architecture',
      description: 'A comprehensive overview of Hindu temple architecture styles, elements, and historical development.',
    },
    {
      title: 'Britannica: Indian Architecture',
      url: 'https://www.britannica.com/art/Indian-architecture',
      description: 'Detailed encyclopedia entry covering the full spectrum of Indian architectural traditions.',
    },
    {
      title: 'Sahapedia',
      url: 'https://www.sahapedia.org/',
      description: 'An open encyclopedic resource on Indian arts, culture, and heritage with rich multimedia content on temple architecture.',
    },
    {
      title: 'Temple Net',
      url: 'https://www.ثtemple.net/',
      description: 'A dedicated portal for information about temples across India including architecture, history, and visiting details.',
    },
  ];

  /** Academic journals */
  const journals = [
    {
      title: 'Artibus Asiae',
      description: 'A leading peer-reviewed journal publishing research on the arts and archaeology of Asia including Indian temple architecture.',
    },
    {
      title: 'South Asian Studies',
      description: 'Academic journal covering art, archaeology, and architecture of South Asia from the prehistoric to the modern period.',
    },
    {
      title: 'Marg Magazine',
      description: 'India\'s premier arts and culture magazine featuring in-depth articles on architecture, sculpture, and design traditions.',
    },
  ];

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Resources & References</h1>
          <p>
            A curated collection of books, websites, and academic materials for
            further exploration of Hindu temple architecture.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>📚 Recommended Books</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid-2">
            {books.map((book, index) => (
              <div className="resource-card" key={index}>
                <h3>📖 {book.title}</h3>
                <p style={{ fontWeight: '500', color: 'var(--color-accent-dark)', marginBottom: '8px' }}>
                  by {book.author}
                </p>
                <p>{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Resources Section */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2>🌐 Online Resources</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid-2">
            {onlineResources.map((resource, index) => (
              <div className="resource-card" key={index}>
                <h3>🔗 {resource.title}</h3>
                <p>{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Visit Resource →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Journals Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>🎓 Academic Journals</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid-3">
            {journals.map((journal, index) => (
              <div className="resource-card" key={index}>
                <h3>📄 {journal.title}</h3>
                <p>{journal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
