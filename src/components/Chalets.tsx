import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedButton } from './AnimatedButton'

gsap.registerPlugin(ScrollTrigger)

interface ChaletType {
  id: number
  name: string
  description: string
  features: string[]
  dailyRate: string
  monthlyRate: string
  seasonalRate: string
  capacity: string
  size: string
  view: string
}

export const Chalets: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  const [activeTab, setActiveTab] = useState<'daily' | 'monthly' | 'seasonal'>('daily')

  const chaletTypes: ChaletType[] = [
    {
      id: 1,
      name: "Ocean View Suite",
      description: "Luxurious oceanfront chalet with panoramic Mediterranean views and private terrace.",
      features: ["Ocean View", "Private Terrace", "King Bed", "Kitchenette", "Air Conditioning"],
      dailyRate: "$180",
      monthlyRate: "$4,500",
      seasonalRate: "$12,000",
      capacity: "2-4 guests",
      size: "65 m²",
      view: "Direct Ocean"
    },
    {
      id: 2,
      name: "Garden Villa",
      description: "Spacious villa surrounded by lush Mediterranean gardens with pool access.",
      features: ["Garden View", "Pool Access", "Two Bedrooms", "Full Kitchen", "Living Area"],
      dailyRate: "$220",
      monthlyRate: "$5,500",
      seasonalRate: "$15,000",
      capacity: "4-6 guests",
      size: "85 m²",
      view: "Garden & Pool"
    },
    {
      id: 3,
      name: "Sunset Penthouse",
      description: "Premium penthouse with wraparound terrace and spectacular sunset views.",
      features: ["Sunset View", "Wraparound Terrace", "Premium Amenities", "Jacuzzi", "Butler Service"],
      dailyRate: "$350",
      monthlyRate: "$8,500",
      seasonalRate: "$22,000",
      capacity: "6-8 guests",
      size: "120 m²",
      view: "Panoramic Sea & Sunset"
    }
  ]

  useEffect(() => {
    if (titleRef.current && tabsRef.current && cardsRef.current) {
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
      .fromTo(tabsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(cardsRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.4"
      )
    }
  }, [])

  const getRateByTab = (chalet: ChaletType) => {
    switch (activeTab) {
      case 'daily': return chalet.dailyRate
      case 'monthly': return chalet.monthlyRate
      case 'seasonal': return chalet.seasonalRate
      default: return chalet.dailyRate
    }
  }


  const handleInquiry = (chaletName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${chaletName} for ${activeTab} rental. Please send me more information.`)
    window.open(`https://wa.me/96171982549?text=${message}`, '_blank')
  }

  return (
    <section
      ref={sectionRef}
      id="chalets"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-luxury text-4xl lg:text-6xl font-bold text-primary-800 mb-6"
          >
            Luxury Chalets
          </h2>
          <p className="font-elegant text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose from our collection of 52 premium chalets, each designed to offer the ultimate in Mediterranean luxury and comfort
          </p>
        </div>

        {/* Rental Type Tabs */}
        <div
          ref={tabsRef}
          className="flex justify-center mb-12"
        >
          <div className="bg-primary-100 rounded-2xl p-2 flex">
            {(['daily', 'monthly', 'seasonal'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-elegant font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white text-primary-800 shadow-lg transform scale-105'
                    : 'text-secondary-600 hover:text-primary-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Rental
              </button>
            ))}
          </div>
        </div>

        {/* Chalets Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {chaletTypes.map((chalet) => (
            <div
              key={chalet.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-primary-200"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-300 via-accent-200 to-primary-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="font-luxury text-xl mb-2">{chalet.name}</h4>
                  <p className="font-elegant">Luxury Photography</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-luxury text-2xl font-semibold text-primary-800">
                    {chalet.name}
                  </h3>
                  <div className="text-right">
                    <div className="font-luxury text-2xl font-bold text-primary-600">
                      {getRateByTab(chalet)}
                    </div>
                    <div className="font-elegant text-sm text-secondary-500">
                      per {activeTab === 'daily' ? 'night' : activeTab === 'monthly' ? 'month' : 'season'}
                    </div>
                  </div>
                </div>

                <p className="font-elegant text-secondary-600 mb-6 leading-relaxed">
                  {chalet.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="font-elegant text-secondary-500">Capacity:</span>
                    <span className="font-elegant font-medium text-secondary-700">{chalet.capacity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-elegant text-secondary-500">Size:</span>
                    <span className="font-elegant font-medium text-secondary-700">{chalet.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-elegant text-secondary-500">View:</span>
                    <span className="font-elegant font-medium text-secondary-700">{chalet.view}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-elegant font-semibold text-secondary-700 mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {chalet.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-secondary-600 rounded-full text-xs font-elegant"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <AnimatedButton
                  onClick={() => handleInquiry(chalet.name)}
                  variant="outline"
                  className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  Inquire Now
                </AnimatedButton>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-elegant text-secondary-600 mb-6">
            All chalets include complimentary beach access, Wi-Fi, and daily housekeeping
          </p>
          <AnimatedButton
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4"
          >
            Book Your Perfect Chalet
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}