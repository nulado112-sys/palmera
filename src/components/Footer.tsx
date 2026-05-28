import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(footerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 100%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Chalets', href: '#chalets' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#booking' }
  ]

  const contactInfo = [
    { icon: '📍', text: 'Chekka, Lebanon' },
    { icon: '📞', text: '+961 71 982 549', href: 'tel:+96171982549' },
    { icon: '📧', text: 'info@palmera-resort.com', href: 'mailto:info@palmera-resort.com' },
    { icon: '🌐', text: 'www.palmera-resort.com', href: 'https://www.palmera-resort.com' }
  ]

  const socialMedia = [
    { 
      icon: '📷', 
      name: 'Instagram', 
      href: 'https://instagram.com/palmerabeachresort',
      bgColor: 'from-pink-500 to-orange-500'
    },
    { 
      icon: '📘', 
      name: 'Facebook', 
      href: 'https://facebook.com/palmerabeachresort',
      bgColor: 'from-blue-600 to-blue-700'
    },
    { 
      icon: '💬', 
      name: 'WhatsApp', 
      href: 'https://wa.me/96171982549',
      bgColor: 'from-green-500 to-green-600'
    },
    { 
      icon: '✈️', 
      name: 'TripAdvisor', 
      href: 'https://tripadvisor.com/palmera-beach-resort',
      bgColor: 'from-green-600 to-green-700'
    }
  ]

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-primary-800 to-primary-900 text-white"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-luxury text-3xl font-bold mb-4">
                Palmera
                <span className="text-primary-400">.</span>
              </h3>
              <p className="font-elegant text-white/80 text-lg leading-relaxed max-w-md">
                Experience luxury by the sea in Chekka, Lebanon. Where Mediterranean beauty meets world-class hospitality.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <h4 className="font-luxury text-xl font-semibold mb-3">
                Stay Connected
              </h4>
              <p className="font-elegant text-white/70 mb-4 text-sm">
                Subscribe to receive exclusive offers and resort updates
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 font-elegant focus:outline-none focus:ring-2 focus:ring-sunset-400"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-elegant font-medium transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-luxury text-xl font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-elegant text-white/80 hover:text-primary-400 transition-colors duration-300 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-luxury text-xl font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-lg">{contact.icon}</span>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="font-elegant text-white/80 hover:text-primary-400 transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="font-elegant text-white/80">
                      {contact.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-elegant font-semibold mb-4 text-white/90">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${social.bgColor} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-elegant text-white/60 text-sm text-center md:text-left">
              © 2024 Palmera Beach Resort. All rights reserved. | Chekka, Lebanon
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button className="font-elegant text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="font-elegant text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="font-elegant text-white/60 hover:text-white transition-colors duration-300">
                Resort Policies
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="font-elegant text-white/50 text-xs">
              Experience the finest Mediterranean luxury • 52 Premium Chalets • Private Beach Access • Family-Friendly Environment
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}