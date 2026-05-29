import React, { useState, useEffect } from 'react'
import './index.css'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = 'Hello, I would like to inquire about reservations at Palmera Beach Resort.'
    const whatsappMessage = encodeURIComponent(message || defaultMessage)
    window.open(`https://wa.me/96171813883?text=${whatsappMessage}`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+96171813883', '_self')
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="palmera-resort">
      {/* Luxury Navigation */}
      <header className={`luxury-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="luxury-nav">
          <div className="nav-brand">
            <img src="/palmera-logo.jpg" alt="Palmera Beach Resort" className="brand-logo" />
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#suites" onClick={() => scrollToSection('suites')}>Suites</a></li>
            <li><a href="#dining" onClick={() => scrollToSection('dining')}>Dining</a></li>
            <li><a href="#wellness" onClick={() => scrollToSection('wellness')}>Wellness</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          
          <div className="nav-cta">
            <button className="reserve-button" onClick={() => handleWhatsApp()}>
              Reserve Your Stay
            </button>
          </div>
          
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Cinematic Hero */}
      <section id="home" className="cinematic-hero">
        <div className="hero-background">
          <div className="hero-image"></div>
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              Mediterranean Luxury
            </div>
            <h1 className="hero-title">
              Where the Mediterranean
              <span className="title-highlight">Meets Lebanese Hospitality</span>
            </h1>
            <p className="hero-subtitle">
              An exclusive beachfront sanctuary in Chekka, North Lebanon. 
              52 elegant accommodations overlooking pristine Mediterranean waters.
            </p>
            
            <div className="hero-actions">
              <button className="cta-primary" onClick={() => handleWhatsApp()}>
                Discover Palmera
              </button>
              <button className="cta-secondary" onClick={() => scrollToSection('experience')}>
                Explore Experience
              </button>
            </div>
          </div>
          
          <div className="hero-details">
            <div className="detail-item">
              <span className="detail-number">52</span>
              <span className="detail-text">Luxury Suites</span>
            </div>
            <div className="detail-item">
              <span className="detail-number">200m</span>
              <span className="detail-text">Private Beach</span>
            </div>
            <div className="detail-item">
              <span className="detail-number">1987</span>
              <span className="detail-text">Heritage</span>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-intro">
            <span className="section-label">The Palmera Experience</span>
            <h2 className="section-title">Where Every Moment Becomes Memory</h2>
            <p className="section-description">
              Immerse yourself in the authentic charm of Lebanese Mediterranean luxury. 
              Our resort harmoniously blends traditional hospitality with contemporary elegance.
            </p>
          </div>
          
          <div className="experience-grid">
            <div className="experience-card large">
              <div className="card-media">
                <div className="media-placeholder mediterranean">
                  <span>Mediterranean Coastline</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Pristine Mediterranean Waters</h3>
                <p>200 meters of exclusive coastline with crystal-clear waters and golden sand beaches, offering the ultimate in privacy and serenity.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-media">
                <div className="media-placeholder cuisine">
                  <span>Lebanese Cuisine</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Authentic Lebanese Cuisine</h3>
                <p>Savor traditional flavors crafted with locally sourced ingredients and time-honored recipes.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-media">
                <div className="media-placeholder wellness">
                  <span>Spa & Wellness</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Wellness & Rejuvenation</h3>
                <p>Restore your balance with treatments inspired by Mediterranean wellness traditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Suites */}
      <section id="suites" className="suites-section">
        <div className="section-container">
          <div className="section-intro">
            <span className="section-label">Accommodations</span>
            <h2 className="section-title">Elegantly Appointed Suites</h2>
            <p className="section-description">
              Each accommodation is thoughtfully designed to embrace the natural beauty 
              of our Mediterranean setting while providing uncompromising luxury.
            </p>
          </div>
          
          <div className="suites-showcase">
            <div className="suite-card featured">
              <div className="suite-media">
                <div className="media-placeholder ocean-suite">
                  <span>Ocean View Suite</span>
                </div>
                <div className="suite-badge">Most Popular</div>
              </div>
              <div className="suite-details">
                <h3>Mediterranean Sea View Suite</h3>
                <p>Panoramic ocean views with private terrace, marble bathroom, and contemporary Lebanese design elements.</p>
                <ul className="amenities-list">
                  <li>30 sqm with private terrace</li>
                  <li>Panoramic Mediterranean views</li>
                  <li>Marble bathroom with rain shower</li>
                  <li>Complimentary WiFi & minibar</li>
                </ul>
                <button className="inquire-btn" onClick={() => handleWhatsApp('I would like to inquire about the Mediterranean Sea View Suite.')}>
                  Inquire Now
                </button>
              </div>
            </div>
            
            <div className="suite-card">
              <div className="suite-media">
                <div className="media-placeholder premium-suite">
                  <span>Premium Suite</span>
                </div>
              </div>
              <div className="suite-details">
                <h3>Premium Family Suite</h3>
                <p>Spacious family accommodations with separate living area and direct beach access.</p>
                <ul className="amenities-list">
                  <li>50 sqm family suite</li>
                  <li>Separate living room</li>
                  <li>Direct beach access</li>
                  <li>Kitchenette facilities</li>
                </ul>
                <button className="inquire-btn" onClick={() => handleWhatsApp('I would like to inquire about the Premium Family Suite.')}>
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section id="dining" className="dining-section">
        <div className="section-container">
          <div className="dining-content">
            <div className="dining-text">
              <span className="section-label">Culinary Excellence</span>
              <h2 className="section-title">Taste the Mediterranean</h2>
              <p className="section-description">
                Our culinary team celebrates the rich heritage of Lebanese cuisine, 
                featuring fresh seafood, locally sourced ingredients, and traditional recipes 
                passed down through generations.
              </p>
              
              <div className="dining-highlights">
                <div className="highlight-item">
                  <h4>Seaside Dining</h4>
                  <p>Al fresco dining with panoramic Mediterranean views</p>
                </div>
                <div className="highlight-item">
                  <h4>Fresh Seafood</h4>
                  <p>Daily catch prepared with authentic Lebanese flavors</p>
                </div>
                <div className="highlight-item">
                  <h4>Traditional Mezze</h4>
                  <p>Classic Lebanese mezze platters with modern presentation</p>
                </div>
              </div>
              
              <button className="dining-cta" onClick={() => handleWhatsApp('I would like to make a dining reservation at Palmera.')}>
                Reserve Your Table
              </button>
            </div>
            
            <div className="dining-visual">
              <div className="media-placeholder dining-experience">
                <span>Dining Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Plan Your Escape</h2>
              <p className="contact-description">
                Experience the perfect blend of Lebanese hospitality and Mediterranean luxury. 
                Our dedicated team is ready to create your unforgettable getaway.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Reservations</h4>
                    <p>+961 71 813 883</p>
                    <button onClick={handleCall} className="call-button">Call Now</button>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div className="contact-text">
                    <h4>WhatsApp</h4>
                    <p>Instant Response</p>
                    <button onClick={() => handleWhatsApp()} className="whatsapp-button">Message Us</button>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Chekka, North Lebanon</p>
                    <p>45 minutes from Beirut</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reservation-card">
              <h3>Quick Reservation</h3>
              <form className="reservation-form">
                <div className="form-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <label>Arrival</label>
                    <input type="date" />
                  </div>
                  <div className="form-field">
                    <label>Departure</label>
                    <input type="date" />
                  </div>
                </div>
                
                <div className="form-field">
                  <label>Guests</label>
                  <select>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                
                <div className="form-field">
                  <label>Special Requests</label>
                  <textarea placeholder="Any special occasions or preferences..."></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="submit-reservation"
                  onClick={() => handleWhatsApp('Hello! I completed the reservation form on your website. Please contact me to discuss availability and rates for my stay at Palmera Beach Resort.')}
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/palmera-logo.jpg" alt="Palmera Beach Resort" className="footer-logo" />
            <p className="footer-tagline">Mediterranean luxury since 1987</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Experience</h4>
              <a href="#suites" onClick={() => scrollToSection('suites')}>Suites</a>
              <a href="#dining" onClick={() => scrollToSection('dining')}>Dining</a>
              <a href="#wellness" onClick={() => scrollToSection('wellness')}>Wellness</a>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <p>+961 71 813 883</p>
              <p>Chekka, North Lebanon</p>
              <p>Mediterranean Coast</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Palmera Beach Resort. Crafted with excellence.</p>
        </div>
      </footer>
    </div>
  )
}

export default App