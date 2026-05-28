export interface BaseComponent {
  children?: React.ReactNode
  className?: string
}

export interface AnimationOptions {
  duration?: number
  delay?: number
  ease?: string
  repeat?: number
  yoyo?: boolean
}