import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (logoRef.current && menuRef.current) {
      gsap.fromTo([logoRef.current, menuRef.current], 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      )
    }
  }, [])

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Chalets', href: '#chalets' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in"
        })
      }
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div ref={logoRef} className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#hero')}
                className={`font-luxury text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary-800' : 'text-white'
                }`}
              >
                Palmera
                <span className="text-primary-500">.</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div ref={menuRef} className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`font-elegant text-sm font-medium transition-colors duration-300 hover:text-primary-500 ${
                      isScrolled ? 'text-secondary-700' : 'text-white/90'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('#booking')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-elegant font-medium transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl border-t border-secondary-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-elegant text-secondary-700 hover:text-primary-600 py-2 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#booking')}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-elegant font-medium transition-colors duration-300 mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}