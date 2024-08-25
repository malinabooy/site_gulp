// Assets
declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.mp4'
declare module '*.webm'
declare module '*.ogg'

// Env
declare const IS_DEV
declare const IS_PROD
declare const IS_WATCH
declare const SCOPE
declare const CDN
declare const BASE_TEMPLATE_PATCH

declare var ymaps: any

// Custom tag
declare namespace JSX {
  interface IntrinsicElements {
    svg: {
      width?: string | number
      height?: string | number
      class?: string
      style?: string | object
    }
    use: {
      href: string
      fill?: string
      stroke?: string
      width?: string | number
      height?: string | number
      x?: string | number
    }
    br: {
      class?: string
    }
    g: {
      class: string
    }
  }
}
