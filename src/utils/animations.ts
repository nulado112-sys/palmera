import { gsap } from 'gsap'

export const fadeIn = (element: HTMLElement, duration = 1, delay = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
  )
}

export const slideInLeft = (element: HTMLElement, duration = 1, delay = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
  )
}

export const slideInRight = (element: HTMLElement, duration = 1, delay = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
  )
}

export const scaleIn = (element: HTMLElement, duration = 0.8, delay = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration, delay, ease: 'back.out(1.7)' }
  )
}

export const staggeredFadeIn = (elements: HTMLElement[], duration = 0.6, stagger = 0.2) => {
  return gsap.fromTo(elements,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration, stagger, ease: 'power3.out' }
  )
}