import { 
  Navigation, 
  About, 
  Chalets, 
  Gallery, 
  Experience, 
  Booking, 
  Testimonials, 
  Footer 
} from './components'
import { SimpleHero } from './components/SimpleHero'

function App() {

  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <SimpleHero />

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
