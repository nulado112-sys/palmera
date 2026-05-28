import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface GSAPOptions {
  duration?: number
  delay?: number
  ease?: string
  repeat?: number
  yoyo?: boolean
}

export const useGSAPFadeIn = (options: GSAPOptions = {}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 1,
          delay: options.delay || 0,
          ease: options.ease || 'power3.out',
        }
      )
    }
  }, [options])

  return ref
}

export const useGSAPSlideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left', options: GSAPOptions = {}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      const fromProps: any = { opacity: 0 }
      const toProps: any = { opacity: 1 }

      switch (direction) {
        case 'left':
          fromProps.x = -100
          toProps.x = 0
          break
        case 'right':
          fromProps.x = 100
          toProps.x = 0
          break
        case 'up':
          fromProps.y = -100
          toProps.y = 0
          break
        case 'down':
          fromProps.y = 100
          toProps.y = 0
          break
      }

      gsap.fromTo(ref.current, fromProps, {
        ...toProps,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: options.ease || 'power3.out',
      })
    }
  }, [direction, options])

  return ref
}

export const useGSAPScale = (options: GSAPOptions = {}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: options.duration || 1,
          delay: options.delay || 0,
          ease: options.ease || 'back.out(1.7)',
        }
      )
    }
  }, [options])

  return ref
}

export const useGSAPRotate = (options: GSAPOptions & { rotation?: number } = {}) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, rotation: options.rotation || 180 },
        {
          opacity: 1,
          rotation: 0,
          duration: options.duration || 1,
          delay: options.delay || 0,
          ease: options.ease || 'power3.out',
        }
      )
    }
  }, [options])

  return ref
}