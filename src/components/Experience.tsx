import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceItem {
  icon: string
  title: string
  description: string
  features: string[]
}

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)

  const experiences: ExperienceItem[] = [
    {
      icon: "🏖️",
      title: "Private Beach Access",
      description: "Exclusive access to our pristine private beach with crystal-clear Mediterranean waters.",
      features: ["200m of private coastline", "Beach loungers & umbrellas", "Water sports equipment", "Beach bar service"]
    },
    {
      icon: "🧘‍♀️",
      title: "Ultimate Relaxation",
      description: "Unwind in our tranquil environment designed for complete peace and rejuvenation.",
      features: ["Spa treatments", "Meditation gardens", "Quiet zones", "Wellness programs"]
    },
    {
      icon: "🏊‍♂️",
      title: "Premium Amenities",
      description: "World-class facilities and services to enhance every moment of your stay.",
      features: ["Infinity pools", "Fitness center", "Restaurant & bars", "Concierge service"]
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family-Friendly",
      description: "Creating magical moments for families with activities and amenities for all ages.",
      features: ["Kids' club", "Family pools", "Playground area", "Family dining options"]
    },
    {
      icon: "🌅",
      title: "Spectacular Views",
      description: "Breathtaking panoramic views of the Mediterranean Sea and Lebanese coastline.",
      features: ["Sunset viewing spots", "Sea-facing terraces", "Mountain vistas", "Photo opportunities"]
    },
    {
      icon: "✨",
      title: "Luxury Lifestyle",
      description: "Immerse yourself in the sophisticated Mediterranean lifestyle and hospitality.",
      features: ["Personal butler service", "Fine dining", "Exclusive events", "VIP experiences"]
    }
  ]

  useEffect(() => {
    if (titleRef.current && heroRef.current && experiencesRef.current) {
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
      .fromTo(heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(experiencesRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.4"
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-luxury text-4xl lg:text-6xl font-bold text-ocean-800 mb-6"
          >
            Resort Experience
          </h2>
          <p className="font-elegant text-lg lg:text-xl text-luxury-600 max-w-3xl mx-auto leading-relaxed">
            Discover a world of luxury, relaxation, and unforgettable moments at Palmera Beach Resort
          </p>
        </div>

        {/* Hero Experience Visual */}
        <div
          ref={heroRef}
          className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-r from-ocean-400 via-sand-300 to-sunset-400 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="font-luxury text-3xl lg:text-5xl font-bold mb-4">
                Mediterranean Paradise
              </h3>
              <p className="font-elegant text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                Where luxury meets the timeless beauty of the Lebanese coastline
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-sunset-300/30 rounded-full blur-2xl"></div>
        </div>

        {/* Experience Grid */}
        <div
          ref={experiencesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-sand-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-sand-200"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {experience.icon}
              </div>

              {/* Content */}
              <h3 className="font-luxury text-2xl font-semibold text-ocean-800 mb-4">
                {experience.title}
              </h3>
              
              <p className="font-elegant text-luxury-600 leading-relaxed mb-6">
                {experience.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {experience.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center font-elegant text-sm text-luxury-600"
                  >
                    <div className="w-2 h-2 bg-sunset-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-ocean-600 to-sunset-500 rounded-3xl p-12 text-white">
            <h3 className="font-luxury text-3xl lg:text-4xl font-bold mb-6">
              Ready for Your Luxury Escape?
            </h3>
            <p className="font-elegant text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the perfect blend of Mediterranean beauty, luxury amenities, and warm Lebanese hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-ocean-600 px-8 py-4 rounded-full font-elegant font-semibold hover:bg-sand-50 transition-colors duration-300 shadow-lg"
              >
                Book Your Stay
              </button>
              <button
                onClick={() => window.open('https://wa.me/96171982549?text=Hi! I would like to learn more about Palmera Beach Resort experiences.', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-elegant font-semibold hover:bg-white hover:text-ocean-600 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}