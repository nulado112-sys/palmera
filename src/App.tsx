import React, { useState } from 'react'
import './index.css'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedChalet, setSelectedChalet] = useState('ocean')

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = 'Hi! I would like to book a stay at Palmera Beach Resort. Please send me more information.'
    const whatsappMessage = encodeURIComponent(message || defaultMessage)
    window.open(`https://wa.me/96171982549?text=${whatsappMessage}`, '_blank')
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const chalets = {
    ocean: {
      name: "Ocean View Suite",
      price: "$180",
      period: "night",
      image: "🌊",
      description: "Wake up to endless Mediterranean views from your private balcony. This suite features floor-to-ceiling windows and a king-sized bed positioned perfectly for sunrise viewing.",
      amenities: ["Private balcony", "King bed", "Sea view", "Kitchenette", "Free WiFi"]
    },
    garden: {
      name: "Garden Villa",
      price: "$220",
      period: "night", 
      image: "🌿",
      description: "Surrounded by lush Mediterranean gardens, this spacious villa offers tranquility and direct pool access. Perfect for families or couples seeking privacy.",
      amenities: ["Garden view", "Pool access", "Two bedrooms", "Full kitchen", "Private patio"]
    },
    sunset: {
      name: "Sunset Penthouse",
      price: "$350",
      period: "night",
      image: "🌅",
      description: "Our crown jewel - a penthouse with wraparound terrace offering 270-degree views. Watch spectacular sunsets from your private jacuzzi.",
      amenities: ["Panoramic views", "Private jacuzzi", "Butler service", "Wine cellar", "Rooftop terrace"]
    }
  }

  return (
    <div className="resort-website">
      {/* Floating Navigation */}
      <nav className={`floating-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-content">
          <div className="brand">
            <span className="brand-text">Palmera</span>
            <span className="brand-dot">•</span>
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
            <a href="#story" onClick={() => scrollToSection('story')}>Our Story</a>
            <a href="#chalets" onClick={() => scrollToSection('chalets')}>Stay</a>
            <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
            <a href="#connect" onClick={() => scrollToSection('connect')}>Connect</a>
            <button className="cta-nav" onClick={() => handleWhatsApp()}>
              Reserve Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section id="hero" className="hero-area">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/resort-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <span className="location-tag">Chekka, Lebanon</span>
            <h1 className="hero-title">
              Where the Mediterranean 
              <span className="title-accent">meets luxury</span>
            </h1>
            <p className="hero-description">
              Discover 52 handcrafted chalets nestled between ancient olive groves 
              and crystal-clear waters. This is more than a stay—it's a story waiting to unfold.
            </p>
            
            <div className="hero-actions">
              <button className="primary-cta" onClick={() => handleWhatsApp()}>
                Begin Your Story
                <span className="cta-arrow">→</span>
              </button>
              <button className="ghost-cta" onClick={() => scrollToSection('story')}>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">52</span>
              <span className="stat-label">Unique Chalets</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Guest Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="story-section">
        <div className="story-container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-label">Our Story</span>
              <h2 className="story-title">
                Born from a love affair with 
                <em>the Lebanese coast</em>
              </h2>
              <p className="story-paragraph">
                Three generations ago, my grandfather fell in love with this stretch of coastline. 
                What started as a small fishing retreat has grown into something extraordinary—
                a place where Mediterranean traditions meet contemporary comfort.
              </p>
              <p className="story-paragraph">
                Every chalet tells a story. Every sunset is a memory. Every guest becomes 
                part of our family's continuing narrative along these ancient shores.
              </p>
              
              <div className="story-signature">
                <span className="signature-text">— Fouad Palmera, Founder</span>
              </div>
            </div>
            
            <div className="story-visual">
              <div className="image-stack">
                <div className="image-card primary">
                  <div className="image-placeholder sunset">
                    <span className="image-label">Mediterranean Sunsets</span>
                  </div>
                </div>
                <div className="image-card secondary">
                  <div className="image-placeholder heritage">
                    <span className="image-label">Heritage & Tradition</span>
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

      {/* Chalets Showcase */}
      <section id="chalets" className="chalets-section">
        <div className="chalets-container">
          <div className="section-intro">
            <h2 className="section-title">Your home away from home</h2>
            <p className="section-subtitle">
              Choose from our collection of thoughtfully designed chalets, 
              each offering its own personality and charm.
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
                  <span className="tab-price">{chalet.price}/{chalet.period}</span>
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
                      onClick={() => handleWhatsApp(`Hi! I'm interested in booking the ${chalet.name}. Could you share availability and rates?`)}
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="section-header">
            <span className="section-label">The Experience</span>
            <h2 className="section-title">More than accommodation</h2>
          </div>
          
          <div className="experience-grid">
            <div className="experience-card featured">
              <div className="card-visual">
                <div className="image-placeholder beach">
                  <span className="experience-icon">🏖️</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Private Beach Access</h3>
                <p>200 meters of pristine Mediterranean coastline, exclusively for our guests. Crystal-clear waters meet soft sand where ancient civilizations once walked.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-visual">
                <div className="image-placeholder dining">
                  <span className="experience-icon">🍽️</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Farm-to-Table Dining</h3>
                <p>Fresh ingredients from local farmers, prepared with recipes passed down through generations.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-visual">
                <div className="image-placeholder wellness">
                  <span className="experience-icon">🧘‍♀️</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Wellness & Spa</h3>
                <p>Rejuvenate with treatments inspired by ancient Mediterranean wellness traditions.</p>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-visual">
                <div className="image-placeholder adventure">
                  <span className="experience-icon">⛵</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Water Adventures</h3>
                <p>Sailing, diving, and water sports equipment available for guests seeking adventure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect-section">
        <div className="connect-container">
          <div className="connect-content">
            <div className="connect-info">
              <span className="section-label">Get in Touch</span>
              <h2 className="connect-title">Ready to create memories?</h2>
              <p className="connect-description">
                Our team is here to help craft your perfect Mediterranean escape. 
                From special celebrations to quiet retreats, we'll make it unforgettable.
              </p>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Call us</span>
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
                      Chat with us instantly
                    </button>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <span className="contact-label">Visit us</span>
                    <span className="contact-value">Chekka, North Lebanon</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="booking-card">
              <div className="card-header">
                <h3>Start Planning Your Stay</h3>
                <p>Tell us about your ideal getaway</p>
              </div>
              
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+961 XX XXX XXX" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <label>Check-in</label>
                    <input type="date" />
                  </div>
                  <div className="form-field">
                    <label>Check-out</label>
                    <input type="date" />
                  </div>
                </div>
                
                <div className="form-field">
                  <label>Preferred Chalet</label>
                  <select>
                    <option value="">Choose your preference</option>
                    <option value="ocean">Ocean View Suite</option>
                    <option value="garden">Garden Villa</option>
                    <option value="sunset">Sunset Penthouse</option>
                  </select>
                </div>
                
                <div className="form-field">
                  <label>Special Requests</label>
                  <textarea 
                    placeholder="Anniversary celebration, dietary requirements, special occasions..."
                    rows={4}
                  ></textarea>
                </div>
                
                <button 
                  className="form-submit"
                  onClick={() => handleWhatsApp("Hi! I'd like to make a reservation at Palmera Beach Resort. I've filled out the booking form on your website - could we discuss availability and rates?")}
                >
                  Send My Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">Palmera</span>
            <p className="footer-tagline">
              Where Mediterranean beauty meets Lebanese hospitality. 
              Your story begins here.
            </p>
          </div>
          
          <div className="footer-info">
            <p className="footer-text">
              © 2024 Palmera Beach Resort, Chekka, Lebanon
            </p>
            <p className="footer-text">
              Crafted with care for unforgettable experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App