import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedButton } from './AnimatedButton'

gsap.registerPlugin(ScrollTrigger)

interface BookingForm {
  name: string
  phone: string
  rentalType: 'daily' | 'monthly' | 'seasonal'
  checkIn: string
  checkOut: string
  message: string
}

export const Booking: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    rentalType: 'daily',
    checkIn: '',
    checkOut: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (titleRef.current && formRef.current && contactRef.current) {
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
      .fromTo([formRef.current, contactRef.current],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.6"
      )
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const message = `New Booking Inquiry from Palmera Beach Resort Website:
    
Name: ${formData.name}
Phone: ${formData.phone}
Rental Type: ${formData.rentalType}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Message: ${formData.message}

Please contact me with availability and pricing information.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/96171982549?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      rentalType: 'daily',
      checkIn: '',
      checkOut: '',
      message: ''
    })
    
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      value: "+961 71 982 549",
      action: () => window.open('tel:+96171982549')
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "Quick Contact",
      action: () => window.open('https://wa.me/96171982549?text=Hi! I would like to inquire about Palmera Beach Resort.')
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@palmera-resort.com",
      action: () => window.open('mailto:info@palmera-resort.com')
    },
    {
      icon: "📍",
      title: "Location",
      value: "Chekka, Lebanon",
      action: () => window.open('https://maps.google.com/?q=Chekka,Lebanon')
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="py-24 lg:py-32 bg-gradient-to-br from-sand-50 via-white to-ocean-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-luxury text-4xl lg:text-6xl font-bold text-ocean-800 mb-6"
          >
            Book Your Stay
          </h2>
          <p className="font-elegant text-lg lg:text-xl text-luxury-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury by the sea? Contact us to reserve your perfect escape at Palmera Beach Resort
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Booking Form */}
          <div
            ref={formRef}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-sand-200"
          >
            <h3 className="font-luxury text-2xl lg:text-3xl font-semibold text-ocean-800 mb-8">
              Reservation Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-elegant font-medium text-luxury-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:ring-2 focus:ring-sunset-500 focus:border-sunset-500 transition-colors font-elegant"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-elegant font-medium text-luxury-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:ring-2 focus:ring-sunset-500 focus:border-sunset-500 transition-colors font-elegant"
                  placeholder="+961 XX XXX XXX"
                />
              </div>

              {/* Rental Type */}
              <div>
                <label htmlFor="rentalType" className="block font-elegant font-medium text-luxury-700 mb-2">
                  Rental Type *
                </label>
                <select
                  id="rentalType"
                  name="rentalType"
                  value={formData.rentalType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:ring-2 focus:ring-sunset-500 focus:border-sunset-500 transition-colors font-elegant"
                >
                  <option value="daily">Daily Rental</option>
                  <option value="monthly">Monthly Rental</option>
                  <option value="seasonal">Seasonal Rental</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block font-elegant font-medium text-luxury-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:ring-2 focus:ring-sunset-500 focus:border-sunset-500 transition-colors font-elegant"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block font-elegant font-medium text-luxury-700 mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:ring-2 focus:ring-sunset-500 focus:border-sunset-500 transition-colors font-elegant"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-elegant font-medium text-luxury-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:ring-2 focus:ring-sunset-500 focus:border-sunset-500 transition-colors font-elegant resize-none"
                  placeholder="Any special requests or questions..."
                />
              </div>

              {/* Submit Button */}
              <AnimatedButton
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sunset-500 hover:bg-sunset-600 text-white py-4 text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Reservation Request'}
              </AnimatedButton>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div
              ref={contactRef}
              className="bg-white rounded-3xl shadow-xl p-8 border border-sand-200"
            >
              <h3 className="font-luxury text-2xl font-semibold text-ocean-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((contact, index) => (
                  <button
                    key={index}
                    onClick={contact.action}
                    className="w-full flex items-center p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors group"
                  >
                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-elegant font-semibold text-luxury-700">
                        {contact.title}
                      </div>
                      <div className="font-elegant text-luxury-600">
                        {contact.value}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-sand-200">
                <h4 className="font-elegant font-semibold text-luxury-700 mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open('https://instagram.com/palmerabeachresort', '_blank')}
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    📷
                  </button>
                  <button
                    onClick={() => window.open('https://facebook.com/palmerabeachresort', '_blank')}
                    className="w-12 h-12 bg-blue-600 rounded-xl text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    📘
                  </button>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              ref={mapRef}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sand-200"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-ocean-300 via-palm-200 to-sand-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="font-luxury text-2xl font-semibold mb-2">
                    Chekka, Lebanon
                  </h3>
                  <p className="font-elegant opacity-90">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}