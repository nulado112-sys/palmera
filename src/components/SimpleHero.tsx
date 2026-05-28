import React from 'react'

export const SimpleHero: React.FC = () => {
  const handleBooking = () => {
    const message = encodeURIComponent('Hi! I would like to book a stay at Palmera Beach Resort. Please send me more information.')
    window.open(`https://wa.me/96171982549?text=${message}`, '_blank')
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/resort-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl mb-6">
          Palmera Beach Resort
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover luxury by the Mediterranean Sea in Chekka, Lebanon. 
          52 premium chalets, pristine beaches, and unparalleled hospitality await.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={handleBooking}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 text-lg"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}