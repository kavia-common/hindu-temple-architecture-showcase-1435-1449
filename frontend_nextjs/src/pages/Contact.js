import React, { useState, useCallback } from 'react';

/**
 * Contact page component with a contact form and site contact information.
 * Handles form state locally with basic client-side validation.
 */
// PUBLIC_INTERFACE
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  /** Handle input field changes */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // PUBLIC_INTERFACE
  /** Handle form submission */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // In a real application, this would send data to a backend
      console.log('Contact form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    [formData]
  );

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have questions, suggestions, or want to contribute? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form">
              <h3 style={{ marginBottom: '24px', fontSize: '1.4rem' }}>Send a Message</h3>

              {submitted && (
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '20px',
                    color: 'var(--color-accent-dark)',
                    fontWeight: '500',
                  }}
                >
                  ✅ Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="content">Content Suggestion</option>
                    <option value="correction">Correction or Feedback</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📩 Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <div className="contact-info-item">
                <span className="contact-info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@templeheritage.example.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">🌐</span>
                <div>
                  <h4>Website</h4>
                  <p>www.templeheritage.example.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Educational Project — Worldwide</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">💡</span>
                <div>
                  <h4>Contributing</h4>
                  <p>
                    We welcome contributions from historians, architects,
                    photographers, and enthusiasts. Share your knowledge!
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '24px', padding: '20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ marginBottom: '8px', fontSize: '0.95rem' }}>⏰ Response Time</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                  We typically respond within 2–3 business days. For urgent
                  inquiries, please mark your subject accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
