import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && contentRef.current && imageRef.current && statsRef.current) {
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
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(statsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.6"
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-luxury text-4xl lg:text-6xl font-bold text-primary-800 mb-6"
          >
            About Palmera
          </h2>
          <p
            ref={subtitleRef}
            className="font-elegant text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            A premier beach resort in the heart of Chekka, where Mediterranean luxury meets timeless hospitality
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="font-luxury text-2xl lg:text-3xl font-semibold text-primary-800 mb-4">
                Mediterranean Excellence
              </h3>
              <p className="font-elegant text-secondary-600 leading-relaxed text-lg mb-6">
                Nestled along the pristine coastline of Chekka, Lebanon, Palmera Beach Resort represents the pinnacle of Mediterranean luxury. Our resort offers an exclusive escape where the azure waters of the Mediterranean meet unparalleled hospitality.
              </p>
              <p className="font-elegant text-secondary-600 leading-relaxed text-lg">
                With direct beach access, world-class amenities, and breathtaking sea views, Palmera provides the perfect setting for both relaxation and celebration. Whether you're seeking a romantic getaway, a family vacation, or a special event venue, our resort delivers experiences that transcend expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl text-primary-500 mb-2">🏖️</div>
                <h4 className="font-luxury text-xl font-semibold text-primary-800 mb-2">Beach Access</h4>
                <p className="font-elegant text-secondary-600 text-sm">Private beach with crystal clear waters</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl text-primary-500 mb-2">🌅</div>
                <h4 className="font-luxury text-xl font-semibold text-primary-800 mb-2">Sea Views</h4>
                <p className="font-elegant text-secondary-600 text-sm">Panoramic Mediterranean vistas</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-200 to-primary-100">
              {/* Placeholder for resort image */}
              <div className="w-full h-full bg-gradient-to-br from-primary-400 via-accent-300 to-primary-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-luxury text-2xl mb-2">Resort Image</h3>
                  <p className="font-elegant">Stunning resort photography goes here</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-300/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="font-luxury text-4xl lg:text-5xl font-bold text-primary-500 mb-2">52</div>
            <p className="font-elegant text-secondary-600 font-medium">Premium Chalets</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="font-luxury text-4xl lg:text-5xl font-bold text-accent-500 mb-2">200m</div>
            <p className="font-elegant text-secondary-600 font-medium">Private Beach</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="font-luxury text-4xl lg:text-5xl font-bold text-primary-600 mb-2">5★</div>
            <p className="font-elegant text-secondary-600 font-medium">Luxury Rating</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="font-luxury text-4xl lg:text-5xl font-bold text-primary-500 mb-2">24/7</div>
            <p className="font-elegant text-secondary-600 font-medium">Concierge Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}