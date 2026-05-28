import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { AnimatedButton } from './AnimatedButton'

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    if (titleRef.current && subtitleRef.current && buttonRef.current) {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 60
      })

      // Animate elements in sequence
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
    }
  }, [])

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/resort-hero.mp4" type="video/mp4" />
        {/* Fallback gradient for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-600 via-ocean-500 to-sand-400"></div>
      </video>

      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="font-luxury text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight leading-tight"
        >
          Welcome to<br />
          <span className="text-primary-300">Palmera Beach Resort</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="font-elegant text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Luxury by the sea in Chekka, Lebanon
        </p>

        <div ref={buttonRef}>
          <AnimatedButton
            onClick={scrollToBooking}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold border-2 border-primary-600 hover:border-primary-700 transition-all duration-300 shadow-2xl backdrop-blur-sm"
          >
            Book Your Stay
          </AnimatedButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm font-elegant mb-2">Discover More</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}