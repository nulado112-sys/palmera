import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Navigation, 
  Hero, 
  About, 
  Chalets, 
  Gallery, 
  Experience, 
  Booking, 
  Testimonials, 
  Footer 
} from './components'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Configure ScrollTrigger
    ScrollTrigger.defaults({
      markers: false,
      scroller: window
    })

    // Smooth scroll behavior
    const smoothScroll = () => {
      gsap.to(window, { duration: 1, scrollTo: { y: 0 } })
    }

    // Add scroll-to-top on page load
    window.addEventListener('beforeunload', smoothScroll)

    return () => {
      window.removeEventListener('beforeunload', smoothScroll)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Chalets Section */}
        <Chalets />

        {/* Gallery Section */}
        <Gallery />

        {/* Experience Section */}
        <Experience />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Booking/Contact Section */}
        <Booking />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
