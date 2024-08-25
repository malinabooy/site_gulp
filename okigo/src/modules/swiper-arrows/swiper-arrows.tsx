import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'

interface arrowButtonProps {
  className?: string
  name: 'carret-left' | 'carret-right'
  blueBack?: boolean
  isThin?: boolean
}

export const ArrowButton = (props: arrowButtonProps) => {
  const { className, name, blueBack, isThin } = props

  const colorMod = {
    'swiper-arrow--blue-back': blueBack,
    'swiper-arrow--thin': isThin
  }

  return (
    <button class={cn('swiper-arrow', colorMod, className)} data-id={name}>
      <Icon name={name} />
    </button>
  )
}

interface props {
  className?: string
  blueBack?: boolean
  smallGap?: boolean
  isThinArrows?: boolean
}

export const SwiperArrows = (props: props) => {
  const { className, blueBack, smallGap, isThinArrows } = props

  const mod = {
    'swiper-arrows--small-gap': smallGap
  }

  return (
    <div class={cn('swiper-arrows', mod, className)}>
      <ArrowButton isThin={isThinArrows} blueBack={blueBack} name='carret-left' />
      <ArrowButton isThin={isThinArrows} blueBack={blueBack} name='carret-right' />
    </div>
  )
}
