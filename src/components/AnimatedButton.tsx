import { useRef } from 'react'
import { gsap } from 'gsap'

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
  }

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      })
    }
    onClick?.()
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 text-white hover:bg-primary-700'
      case 'secondary':
        return 'bg-secondary-600 text-white hover:bg-secondary-700'
      case 'outline':
        return 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
      default:
        return 'bg-primary-600 text-white hover:bg-primary-700'
    }
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 transform-gpu ${getVariantClasses()} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}