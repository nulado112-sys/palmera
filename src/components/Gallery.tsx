import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GalleryImage {
  id: number
  title: string
  category: 'chalets' | 'pools' | 'beach' | 'sunset' | 'palms' | 'lifestyle'
  alt: string
}

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock gallery images - in real implementation, these would be actual resort photos
  const galleryImages: GalleryImage[] = [
    { id: 1, title: "Ocean View Chalet", category: "chalets", alt: "Luxury oceanfront chalet" },
    { id: 2, title: "Infinity Pool", category: "pools", alt: "Resort infinity pool overlooking the sea" },
    { id: 3, title: "Private Beach", category: "beach", alt: "Pristine private beach with crystal waters" },
    { id: 4, title: "Mediterranean Sunset", category: "sunset", alt: "Breathtaking sunset over the Mediterranean" },
    { id: 5, title: "Palm Garden", category: "palms", alt: "Tropical palm trees in resort gardens" },
    { id: 6, title: "Poolside Dining", category: "lifestyle", alt: "Guests enjoying poolside dining" },
    { id: 7, title: "Garden Villa", category: "chalets", alt: "Spacious garden villa with private terrace" },
    { id: 8, title: "Pool Bar", category: "pools", alt: "Elegant pool bar with sea views" },
    { id: 9, title: "Beach Activities", category: "beach", alt: "Water sports and beach activities" },
    { id: 10, title: "Golden Hour", category: "sunset", alt: "Resort bathed in golden sunset light" },
    { id: 11, title: "Palm Paradise", category: "palms", alt: "Resort's lush palm tree landscape" },
    { id: 12, title: "Romantic Dinner", category: "lifestyle", alt: "Couples enjoying beachfront dining" }
  ]

  const categories = [
    { id: 'all', name: 'All', icon: '🏖️' },
    { id: 'chalets', name: 'Chalets', icon: '🏡' },
    { id: 'pools', name: 'Pools', icon: '🏊‍♀️' },
    { id: 'beach', name: 'Beach', icon: '🏖️' },
    { id: 'sunset', name: 'Sunset', icon: '🌅' },
    { id: 'palms', name: 'Gardens', icon: '🌴' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '✨' }
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  useEffect(() => {
    if (titleRef.current && filtersRef.current && galleryRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(filtersRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
    }
  }, [])

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(galleryRef.current.children,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      )
    }
  }, [activeFilter])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentImageIndex(0)
  }

  // Mobile swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentImageIndex < filteredImages.length - 1) {
      setCurrentImageIndex(prev => prev + 1)
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 lg:py-32 bg-gradient-to-b from-sand-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-luxury text-4xl lg:text-6xl font-bold text-ocean-800 mb-6"
          >
            Gallery Experience
          </h2>
          <p className="font-elegant text-lg lg:text-xl text-luxury-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the beauty of Palmera Beach Resort through our curated collection of moments
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-4 py-2 rounded-full font-elegant font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.id
                  ? 'bg-sunset-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-luxury-600 hover:bg-sand-100 shadow-md border border-sand-200'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Gallery Slider */}
        <div className="block md:hidden mb-8">
          <div
            className="relative overflow-hidden rounded-3xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="w-full flex-shrink-0 aspect-[4/3] bg-gradient-to-br from-primary-300 via-accent-200 to-primary-400"
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <h3 className="font-luxury text-xl mb-2">{image.title}</h3>
                      <p className="font-elegant text-sm opacity-90">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Image Counter */}
          <div className="text-center mt-4">
            <span className="font-elegant text-luxury-600">
              {currentImageIndex + 1} of {filteredImages.length}
            </span>
          </div>
        </div>

        {/* Desktop Grid Gallery */}
        <div
          ref={galleryRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square bg-gradient-to-br from-ocean-300 via-sand-200 to-sunset-200 relative overflow-hidden ${
                index === 0 ? 'aspect-[2/1] md:aspect-square' : ''
              }`}>
                {/* Placeholder for actual image */}
                <div className="w-full h-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <h3 className={`font-luxury mb-2 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
                      {image.title}
                    </h3>
                    <p className={`font-elegant opacity-90 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                      {image.alt}
                    </p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-elegant text-luxury-600 mb-6">
            Ready to create your own memories at Palmera Beach Resort?
          </p>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 rounded-full font-elegant font-semibold transition-colors duration-300 shadow-lg"
          >
            Book Your Experience
          </button>
        </div>
      </div>
    </section>
  )
}