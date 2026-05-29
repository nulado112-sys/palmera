import React, { useState, useEffect } from 'react'
import './index.css'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
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
      {/* Professional Navigation */}
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navigation">
          <div className="nav-brand">
            <img src="/palmera-logo.jpg" alt="Palmera Beach Resort" className="logo" />
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#accommodations" onClick={() => scrollToSection('accommodations')}>Accommodations</a></li>
            <li><a href="#amenities" onClick={() => scrollToSection('amenities')}>Amenities</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <button className="btn-call" onClick={handleCall}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-reserve" onClick={() => handleWhatsApp()}>
              Reserve
            </button>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-media">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/resort-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>Palmera Beach Resort</h1>
            <p>Luxury Mediterranean accommodation in Chekka, North Lebanon</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => handleWhatsApp()}>
                Book Your Stay
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('about')}>
                Explore
              </button>
            </div>
          </div>
          
          <div className="hero-info">
            <div className="info-item">
              <span className="number">52</span>
              <span className="label">Rooms & Suites</span>
            </div>
            <div className="info-item">
              <span className="number">200m</span>
              <span className="label">Private Beach</span>
            </div>
            <div className="info-item">
              <span className="number">1987</span>
              <span className="label">Established</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Palmera</h2>
            <p>Three decades of Mediterranean hospitality excellence</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Mediterranean Elegance</h3>
              <p>
                Since 1987, Palmera Beach Resort has been a cornerstone of Lebanese hospitality. 
                Located on the pristine shores of Chekka, our resort offers an authentic Mediterranean 
                experience where traditional Lebanese warmth meets modern comfort.
              </p>
              <p>
                Our 52 carefully designed accommodations provide guests with panoramic sea views, 
                direct beach access, and the personalized service that has defined our reputation 
                for over three decades.
              </p>
              
              <div className="features">
                <div className="feature">
                  <h4>Prime Location</h4>
                  <p>Direct access to 200 meters of private Mediterranean coastline</p>
                </div>
                <div className="feature">
                  <h4>Authentic Cuisine</h4>
                  <p>Traditional Lebanese dishes and fresh Mediterranean seafood</p>
                </div>
                <div className="feature">
                  <h4>Family Heritage</h4>
                  <p>Three generations of hospitality excellence since 1987</p>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span>Resort Overview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="accommodations">
        <div className="container">
          <div className="section-header">
            <h2>Accommodations</h2>
            <p>Thoughtfully designed rooms and suites with Mediterranean views</p>
          </div>
          
          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-image">
                <div className="placeholder-content">
                  <span>Sea View Room</span>
                </div>
              </div>
              <div className="room-content">
                <h3>Sea View Rooms</h3>
                <p>Comfortable accommodations with direct Mediterranean views and modern amenities.</p>
                <ul>
                  <li>25 sqm</li>
                  <li>Private balcony</li>
                  <li>Air conditioning</li>
                  <li>Mini-bar</li>
                </ul>
                <button className="btn-inquire" onClick={() => handleWhatsApp('I would like to inquire about Sea View Room availability and rates.')}>
                  Inquire
                </button>
              </div>
            </div>
            
            <div className="room-card">
              <div className="room-image">
                <div className="placeholder-content">
                  <span>Premium Suite</span>
                </div>
              </div>
              <div className="room-content">
                <h3>Premium Suites</h3>
                <p>Spacious suites with separate living areas and panoramic sea views.</p>
                <ul>
                  <li>45 sqm</li>
                  <li>Separate living room</li>
                  <li>Large terrace</li>
                  <li>Kitchenette</li>
                </ul>
                <button className="btn-inquire" onClick={() => handleWhatsApp('I would like to inquire about Premium Suite availability and rates.')}>
                  Inquire
                </button>
              </div>
            </div>
            
            <div className="room-card">
              <div className="room-image">
                <div className="placeholder-content">
                  <span>Family Villa</span>
                </div>
              </div>
              <div className="room-content">
                <h3>Family Villas</h3>
                <p>Private villas perfect for families with direct beach access.</p>
                <ul>
                  <li>70 sqm</li>
                  <li>2 bedrooms</li>
                  <li>Private garden</li>
                  <li>Beach access</li>
                </ul>
                <button className="btn-inquire" onClick={() => handleWhatsApp('I would like to inquire about Family Villa availability and rates.')}>
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="amenities">
        <div className="container">
          <div className="section-header">
            <h2>Resort Amenities</h2>
            <p>Everything you need for the perfect Mediterranean getaway</p>
          </div>
          
          <div className="amenities-grid">
            <div className="amenity">
              <div className="amenity-icon">🏖️</div>
              <h3>Private Beach</h3>
              <p>200 meters of exclusive Mediterranean coastline with crystal-clear waters</p>
            </div>
            
            <div className="amenity">
              <div className="amenity-icon">🍽️</div>
              <h3>Restaurant</h3>
              <p>Fresh seafood and authentic Lebanese cuisine with seaside dining</p>
            </div>
            
            <div className="amenity">
              <div className="amenity-icon">🏊‍♀️</div>
              <h3>Swimming Pool</h3>
              <p>Infinity pool overlooking the Mediterranean with pool bar service</p>
            </div>
            
            <div className="amenity">
              <div className="amenity-icon">🚗</div>
              <h3>Parking</h3>
              <p>Complimentary parking for all guests with 24/7 security</p>
            </div>
            
            <div className="amenity">
              <div className="amenity-icon">📶</div>
              <h3>WiFi</h3>
              <p>High-speed internet access throughout the resort property</p>
            </div>
            
            <div className="amenity">
              <div className="amenity-icon">🛎️</div>
              <h3>Concierge</h3>
              <p>24/7 reception and concierge services for all guest needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact & Reservations</h2>
            <p>Ready to experience Mediterranean luxury at Palmera Beach Resort</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-block">
                <h3>Reservations</h3>
                <p>Call us directly or send a WhatsApp message for immediate assistance</p>
                <div className="contact-methods">
                  <button className="contact-method" onClick={handleCall}>
                    <span className="method-icon">📞</span>
                    <div>
                      <strong>Phone</strong>
                      <span>+961 71 813 883</span>
                    </div>
                  </button>
                  
                  <button className="contact-method" onClick={() => handleWhatsApp()}>
                    <span className="method-icon">💬</span>
                    <div>
                      <strong>WhatsApp</strong>
                      <span>Quick Response</span>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="info-block">
                <h3>Location</h3>
                <p>Chekka, North Lebanon</p>
                <p>Mediterranean Coastline</p>
                <p>45 minutes from Beirut</p>
              </div>
              
              <div className="info-block">
                <h3>Hours</h3>
                <p>Reception: 24/7</p>
                <p>Restaurant: 7:00 AM - 11:00 PM</p>
                <p>Pool Bar: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
            
            <div className="reservation-form">
              <h3>Quick Inquiry</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Check-in</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Check-out</label>
                    <input type="date" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Guests</label>
                  <select>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea placeholder="Any special requests or questions..."></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="btn-submit"
                  onClick={() => handleWhatsApp('Hello, I filled out the inquiry form on your website and would like to discuss availability and rates for my stay at Palmera Beach Resort.')}
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/palmera-logo.jpg" alt="Palmera Beach Resort" className="footer-logo" />
              <p>Mediterranean luxury since 1987</p>
            </div>
            
            <div className="footer-info">
              <div className="footer-section">
                <h4>Contact</h4>
                <p>+961 71 813 883</p>
                <p>Chekka, North Lebanon</p>
              </div>
              
              <div className="footer-section">
                <h4>Quick Links</h4>
                <a href="#accommodations" onClick={() => scrollToSection('accommodations')}>Rooms</a>
                <a href="#amenities" onClick={() => scrollToSection('amenities')}>Amenities</a>
                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Palmera Beach Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App