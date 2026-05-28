import React from 'react'
import './index.css'

const App: React.FC = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I would like to book a stay at Palmera Beach Resort. Please send me more information.')
    window.open(`https://wa.me/96171982549?text=${message}`, '_blank')
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="luxury-resort">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo">Palmera.</div>
          <ul className="nav-menu">
            <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#chalets" onClick={() => scrollToSection('chalets')}>Chalets</a></li>
            <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <button className="book-btn" onClick={handleWhatsApp}>Book Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/resort-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Palmera Beach Resort</h1>
          <p className="hero-subtitle">
            Experience luxury by the Mediterranean Sea in Chekka, Lebanon.<br />
            52 premium chalets, pristine beaches, and unparalleled hospitality.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleWhatsApp}>
              Book Your Stay
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('about')}>
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Mediterranean Luxury Awaits</h2>
              <p>
                Nestled along the pristine shores of Chekka, Lebanon, Palmera Beach Resort 
                offers an unparalleled escape into Mediterranean luxury. With 52 meticulously 
                designed chalets, each offering breathtaking sea views and world-class amenities.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>52</h3>
                  <p>Luxury Chalets</p>
                </div>
                <div className="stat-item">
                  <h3>200m</h3>
                  <p>Private Beach</p>
                </div>
                <div className="stat-item">
                  <h3>4.9★</h3>
                  <p>Guest Rating</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Concierge</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <h3>Resort Overview</h3>
                <p>Luxury Mediterranean Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chalets Section */}
      <section id="chalets" className="chalets-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Luxury Chalets</h2>
            <p>Choose from our collection of premium accommodations</p>
          </div>
          
          <div className="chalets-grid">
            <div className="chalet-card">
              <div className="card-image">
                <h3>Ocean View Suite</h3>
                <p>Panoramic Mediterranean views</p>
              </div>
              <div className="card-content">
                <h3>Ocean View Suite</h3>
                <div className="price">$180/night</div>
                <ul className="features">
                  <li>Ocean View</li>
                  <li>Private Terrace</li>
                  <li>King Bed</li>
                  <li>Kitchenette</li>
                </ul>
                <button className="inquire-btn" onClick={handleWhatsApp}>Inquire Now</button>
              </div>
            </div>

            <div className="chalet-card">
              <div className="card-image">
                <h3>Garden Villa</h3>
                <p>Lush Mediterranean gardens</p>
              </div>
              <div className="card-content">
                <h3>Garden Villa</h3>
                <div className="price">$220/night</div>
                <ul className="features">
                  <li>Garden View</li>
                  <li>Pool Access</li>
                  <li>Two Bedrooms</li>
                  <li>Full Kitchen</li>
                </ul>
                <button className="inquire-btn" onClick={handleWhatsApp}>Inquire Now</button>
              </div>
            </div>

            <div className="chalet-card">
              <div className="card-image">
                <h3>Sunset Penthouse</h3>
                <p>Spectacular sunset views</p>
              </div>
              <div className="card-content">
                <h3>Sunset Penthouse</h3>
                <div className="price">$350/night</div>
                <ul className="features">
                  <li>Sunset View</li>
                  <li>Wraparound Terrace</li>
                  <li>Jacuzzi</li>
                  <li>Butler Service</li>
                </ul>
                <button className="inquire-btn" onClick={handleWhatsApp}>Inquire Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Gallery Experience</h2>
            <p>Immerse yourself in the beauty of Palmera Beach Resort</p>
          </div>
          
          <div className="gallery-grid">
            <div className="gallery-item large">
              <div className="gallery-placeholder">
                <h3>Resort Overview</h3>
                <p>Aerial view of our luxury resort</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h3>Ocean Views</h3>
                <p>Crystal clear waters</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h3>Beach Life</h3>
                <p>Private beach access</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h3>Luxury Interiors</h3>
                <p>Premium accommodations</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h3>Dining</h3>
                <p>Gourmet experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+961 71 982 549</p>
              </div>
              <div className="contact-item">
                <h3>💬 WhatsApp</h3>
                <p>Quick Contact</p>
                <button className="whatsapp-btn" onClick={handleWhatsApp}>Message Us</button>
              </div>
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>info@palmera-resort.com</p>
              </div>
              <div className="contact-item">
                <h3>📍 Location</h3>
                <p>Chekka, Lebanon</p>
              </div>
            </div>
            
            <div className="booking-form">
              <h2>Book Your Experience</h2>
              <div className="form-group">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <select>
                  <option>Daily Rental</option>
                  <option>Monthly Rental</option>
                  <option>Seasonal Rental</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="date" placeholder="Check-in Date" />
                </div>
                <div className="form-group">
                  <input type="date" placeholder="Check-out Date" />
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Special Requests"></textarea>
              </div>
              <button className="submit-btn" onClick={handleWhatsApp}>
                Send Reservation Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>Palmera.</h2>
              <p>Experience luxury by the sea in Chekka, Lebanon. Where Mediterranean beauty meets world-class hospitality.</p>
            </div>
            <div className="footer-info">
              <p>© 2026 Palmera Beach Resort. All rights reserved.</p>
              <p>Chekka, Lebanon | +961 71 982 549</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App