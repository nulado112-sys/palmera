import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  review: string
  stay: string
}

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah & Michel Khoury",
      location: "Beirut, Lebanon",
      rating: 5,
      review: "Palmera Beach Resort exceeded all our expectations. The oceanview chalet was absolutely stunning, and the private beach access made our anniversary truly special. The staff went above and beyond to ensure every moment was perfect.",
      stay: "Ocean View Suite - 3 nights"
    },
    {
      id: 2,
      name: "James Thompson",
      location: "Dubai, UAE",
      rating: 5,
      review: "As someone who travels frequently for business, I can honestly say Palmera is exceptional. The attention to detail, the breathtaking views, and the Mediterranean hospitality created an unforgettable experience. I'll definitely be returning.",
      stay: "Sunset Penthouse - 1 week"
    },
    {
      id: 3,
      name: "Nadia Al-Rashid",
      location: "Doha, Qatar",
      rating: 5,
      review: "We brought our family for a summer vacation and every detail was perfect. The kids loved the pool and beach activities while my husband and I enjoyed the spa and fine dining. Palmera truly caters to everyone.",
      stay: "Garden Villa - 2 weeks"
    },
    {
      id: 4,
      name: "Antonio Rossi",
      location: "Rome, Italy",
      rating: 5,
      review: "Having visited many Mediterranean resorts, Palmera stands out for its authentic Lebanese hospitality combined with world-class luxury. The sunset views from our chalet were absolutely breathtaking.",
      stay: "Ocean View Suite - 5 nights"
    },
    {
      id: 5,
      name: "Emma & David Miller",
      location: "London, UK",
      rating: 5,
      review: "Our honeymoon at Palmera was a dream come true. The resort's elegant design, pristine beach, and exceptional service created the perfect romantic atmosphere. We're already planning our return trip!",
      stay: "Sunset Penthouse - 1 week"
    }
  ]

  useEffect(() => {
    if (titleRef.current && testimonialsRef.current) {
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
      .fromTo(testimonialsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
    }
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${index < rating ? 'text-sunset-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 lg:py-32 bg-gradient-to-br from-ocean-50 via-white to-sand-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-luxury text-4xl lg:text-6xl font-bold text-ocean-800 mb-6"
          >
            Guest Experiences
          </h2>
          <p className="font-elegant text-lg lg:text-xl text-luxury-600 max-w-3xl mx-auto leading-relaxed">
            Discover what our guests say about their unforgettable stays at Palmera Beach Resort
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={testimonialsRef}
          className="max-w-4xl mx-auto"
        >
          {/* Mobile Testimonials */}
          <div className="md:hidden">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-sand-200">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="font-elegant text-lg text-luxury-700 leading-relaxed italic mb-6">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
              </div>
              
              <div className="text-center border-t border-sand-200 pt-6">
                <h4 className="font-luxury text-xl font-semibold text-ocean-800">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-elegant text-luxury-600 mb-2">
                  {testimonials[currentTestimonial].location}
                </p>
                <p className="font-elegant text-sm text-sunset-600 bg-sunset-50 inline-block px-3 py-1 rounded-full">
                  {testimonials[currentTestimonial].stay}
                </p>
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-sunset-500 w-8' 
                      : 'bg-luxury-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-3xl shadow-xl p-8 border border-sand-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  index === currentTestimonial ? 'ring-2 ring-sunset-200' : ''
                }`}
              >
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review */}
                <blockquote className="font-elegant text-luxury-700 leading-relaxed italic mb-6 text-center">
                  "{testimonial.review}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center border-t border-sand-200 pt-6">
                  <h4 className="font-luxury text-lg font-semibold text-ocean-800 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="font-elegant text-luxury-600 text-sm mb-3">
                    {testimonial.location}
                  </p>
                  <p className="font-elegant text-xs text-sunset-600 bg-sunset-50 inline-block px-3 py-1 rounded-full">
                    {testimonial.stay}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sunset-500 to-ocean-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="font-luxury text-2xl lg:text-3xl font-bold mb-4">
              Create Your Own Unforgettable Story
            </h3>
            <p className="font-elegant text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our family of satisfied guests and experience the magic of Palmera Beach Resort
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-sunset-600 px-8 py-4 rounded-full font-elegant font-semibold hover:bg-sand-50 transition-colors duration-300 shadow-lg"
              >
                Book Your Experience
              </button>
              <button
                onClick={() => window.open('https://www.tripadvisor.com/palmera-beach-resort', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-elegant font-semibold hover:bg-white hover:text-sunset-600 transition-all duration-300"
              >
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="font-luxury text-3xl font-bold text-sunset-500 mb-2">500+</div>
            <p className="font-elegant text-luxury-600">Happy Guests</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="font-luxury text-3xl font-bold text-ocean-500 mb-2">4.9★</div>
            <p className="font-elegant text-luxury-600">Average Rating</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="font-luxury text-3xl font-bold text-palm-500 mb-2">95%</div>
            <p className="font-elegant text-luxury-600">Return Rate</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="font-luxury text-3xl font-bold text-sunset-500 mb-2">24/7</div>
            <p className="font-elegant text-luxury-600">Guest Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}