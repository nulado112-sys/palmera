import React, { useState } from 'react'
import './index.css'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedChalet, setSelectedChalet] = useState('ocean')

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = 'Hello! I would like to inquire about booking a stay at Palmera Beach Resort. Could you please provide me with more information?'
    const whatsappMessage = encodeURIComponent(message || defaultMessage)
    window.open(`https://wa.me/96171982549?text=${whatsappMessage}`, '_blank')
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const chalets = {
    ocean: {
      name: "Mediterranean Suite",
      price: "$180",
      period: "night",
      image: "🌊",
      description: "Perched above crystalline waters with panoramic Mediterranean views. This elegantly appointed suite features a private terrace, perfect for watching sunrise paint the horizon.",
      amenities: ["Ocean terrace", "King bedroom", "Panoramic views", "Marble bathroom", "Premium linens"]
    },
    garden: {
      name: "Garden Residence",
      price: "$220",
      period: "night", 
      image: "🌿",
      description: "Nestled within our botanical gardens with direct access to the infinity pool. A sanctuary of tranquility where Mediterranean flora frames every window.",
      amenities: ["Garden courtyard", "Pool access", "Two bedrooms", "Chef's kitchen", "Outdoor dining"]
    },
    sunset: {
      name: "Penthouse Collection",
      price: "$350",
      period: "night",
      image: "🌅",
      description: "Our signature accommodation offering unparalleled luxury. The wraparound terrace provides 180-degree views where every evening becomes a private sunset celebration.",
      amenities: ["Private terrace", "Master suite", "Butler service", "Wine collection", "Rooftop jacuzzi"]
    }
  }

  return (
    <div className="resort-website">
      {/* Refined Navigation */}
      <nav className={`floating-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-content">
          <div className="brand">
            <span className="brand-text">Palmera</span>
            <div className="brand-dot"></div>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`nav-menu ${isMenuOpen ? 'menu-visible' : ''}`}>
            <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
            <a href="#story" onClick={() => scrollToSection('story')}>Heritage</a>
            <a href="#chalets" onClick={() => scrollToSection('chalets')}>Accommodations</a>
            <a href="#experience" onClick={() => scrollToSection('experience')}>Experiences</a>
            <a href="#connect" onClick={() => scrollToSection('connect')}>Contact</a>
            <button className="cta-nav" onClick={() => handleWhatsApp()}>
              Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Sophisticated Hero */}
      <section id="hero" className="hero-area">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/resort-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <span className="location-tag">Chekka, Lebanon</span>
            <h1 className="hero-title">
              Palmera Beach
              <span className="title-accent">Resort</span>
            </h1>
            <p className="hero-description">
              Luxury chalets by the Mediterranean Sea
            </p>
            
            <div className="hero-actions">
              <button className="primary-cta" onClick={() => handleWhatsApp()}>
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">52</span>
            <span className="stat-label">Accommodations</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Guest Rating</span>
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section id="story" className="story-section">
        <div className="story-container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-label">Our Heritage</span>
              <h2 className="story-title">
                Three decades of 
                <em>Lebanese hospitality</em>
              </h2>
              <p className="story-paragraph">
                In 1987, what began as a family's vision has evolved into Lebanon's most distinctive coastal retreat. 
                Our commitment remains unchanged: to create extraordinary experiences that honor both our Mediterranean setting and Lebanese traditions.
              </p>
              <p className="story-paragraph">
                Each accommodation is thoughtfully positioned to embrace the natural beauty of our coastline, 
                while our dedicated team ensures every detail reflects the warmth and generosity that defines Lebanese hospitality.
              </p>
              
              <div className="story-signature">
                <span className="signature-text">— The Palmera Family</span>
              </div>
            </div>
            
            <div className="story-visual">
              <div className="image-stack">
                <div className="image-card primary">
                  <div className="image-placeholder sunset">
                    <span className="image-label">Coastal Serenity</span>
                  </div>
                </div>
                <div className="image-card secondary">
                  <div className="image-placeholder heritage">
                    <span className="image-label">Lebanese Heritage</span>
                  </div>
                </div>
                <div className="floating-element">
                  <span className="years-badge">Est. 1987</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Accommodations */}
      <section id="chalets" className="chalets-section">
        <div className="chalets-container">
          <div className="section-intro">
            <h2 className="section-title">Distinctive Accommodations</h2>
            <p className="section-subtitle">
              Each residence is individually designed to capture the essence of Mediterranean living 
              while providing contemporary comfort and privacy.
            </p>
          </div>
          
          <div className="chalets-showcase">
            <div className="chalets-tabs">
              {Object.entries(chalets).map(([key, chalet]) => (
                <button
                  key={key}
                  className={`chalet-tab ${selectedChalet === key ? 'active' : ''}`}
                  onClick={() => setSelectedChalet(key)}
                >
                  <span className="tab-icon">{chalet.image}</span>
                  <span className="tab-name">{chalet.name}</span>
                  <span className="tab-price">From {chalet.price}</span>
                </button>
              ))}
            </div>
            
            <div className="chalet-detail">
              {Object.entries(chalets).map(([key, chalet]) => (
                <div
                  key={key}
                  className={`chalet-card ${selectedChalet === key ? 'visible' : ''}`}
                >
                  <div className="chalet-visual">
                    <div className="chalet-image">
                      <div className="image-placeholder chalet-bg">
                        <span className="chalet-emoji">{chalet.image}</span>
                        <span className="view-label">{chalet.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chalet-info">
                    <div className="chalet-header">
                      <h3 className="chalet-name">{chalet.name}</h3>
                      <div className="chalet-pricing">
                        <span className="price">{chalet.price}</span>
                        <span className="period">per {chalet.period}</span>
                      </div>
                    </div>
                    
                    <p className="chalet-description">{chalet.description}</p>
                    
                    <div className="amenities-list">
                      {chalet.amenities.map((amenity, index) => (
                        <span key={index} className="amenity-tag">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      className="book-chalet-btn"
                      onClick={() => handleWhatsApp(`Good day! I'm interested in learning more about the ${chalet.name} at Palmera Beach Resort. Could you please share availability and current rates?`)}
                    >
                      Inquire About Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="section-header">
            <span className="section-label">Experiences</span>
            <h2 className="section-title">Curated for distinction</h2>
          </div>
          
          <div className="experience-grid">
            <div className="experience-card featured">
              <div className="card-visual">
                <div className="image-placeholder beach">
                  <span className="experience-icon">🏖️</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Private Coastal Access</h3>
                <p>Two hundred meters of pristine Mediterranean coastline reserved exclusively for our guests. Crystal-clear waters meet carefully maintained shores in this secluded sanctuary.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-visual">
                <div className="image-placeholder dining">
                  <span className="experience-icon">🍽️</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Lebanese Culinary Heritage</h3>
                <p>Authentic flavors prepared with locally sourced ingredients and time-honored recipes passed through generations.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-visual">
                <div className="image-placeholder wellness">
                  <span className="experience-icon">🧘‍♀️</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Wellness & Rejuvenation</h3>
                <p>Restorative treatments inspired by Mediterranean wellness traditions in our tranquil spa sanctuary.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-visual">
                <div className="image-placeholder adventure">
                  <span className="experience-icon">⛵</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Maritime Adventures</h3>
                <p>Explore the Lebanese coast through curated sailing excursions and water-based activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="connect" className="connect-section">
        <div className="connect-container">
          <div className="connect-content">
            <div className="connect-info">
              <span className="section-label">Connect With Us</span>
              <h2 className="connect-title">Plan your visit</h2>
              <p className="connect-description">
                Our hospitality team is dedicated to crafting experiences that exceed expectations. 
                From intimate celebrations to extended retreats, we ensure every detail is perfectly orchestrated.
              </p>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Direct Line</span>
                    <span className="contact-value">+961 71 982 549</span>
                  </div>
                </div>
                
                <div className="contact-item whatsapp-item">
                  <span className="contact-icon">💬</span>
                  <div className="contact-details">
                    <span className="contact-label">WhatsApp</span>
                    <button 
                      className="whatsapp-link"
                      onClick={() => handleWhatsApp()}
                    >
                      Message us directly
                    </button>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Chekka, North Lebanon</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="booking-card">
              <div className="card-header">
                <h3>Reservation Inquiry</h3>
                <p>Share your preferences and we'll craft the perfect experience</p>
              </div>
              
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your complete name" />
                  </div>
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+961 XX XXX XXX" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <label>Arrival Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-field">
                    <label>Departure Date</label>
                    <input type="date" />
                  </div>
                </div>
                
                <div className="form-field">
                  <label>Accommodation Preference</label>
                  <select>
                    <option value="">Select your preference</option>
                    <option value="ocean">Mediterranean Suite</option>
                    <option value="garden">Garden Residence</option>
                    <option value="sunset">Penthouse Collection</option>
                  </select>
                </div>
                
                <div className="form-field">
                  <label>Special Occasions or Preferences</label>
                  <textarea 
                    placeholder="Anniversary celebration, dietary considerations, special requests, or any preferences that would enhance your stay..."
                    rows={4}
                  ></textarea>
                </div>
                
                <button 
                  className="form-submit"
                  onClick={() => handleWhatsApp("Hello! I've completed the reservation inquiry form on your website and would like to discuss my accommodation preferences and availability at Palmera Beach Resort.")}
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">Palmera</span>
            <p className="footer-tagline">
              Where Mediterranean elegance meets Lebanese hospitality. 
              Creating extraordinary experiences since 1987.
            </p>
          </div>
          
          <div className="footer-info">
            <p className="footer-text">
              © 2024 Palmera Beach Resort
            </p>
            <p className="footer-text">
              Chekka, North Lebanon
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App