import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Title } from '@/modules/title/title'
import { Button } from '@/modules/button/button'
import { Icon } from '@/modules/icon/icon'
import { SwiperArrows } from '@/modules/swiper-arrows/swiper-arrows'
import { UiSliderHeader } from '@/modules/ui-slider/ui-slider-header'
import { UiSliderFooter } from '@/modules/ui-slider/ui-slider-footer'

interface props {
  className?: string
  title: string
  children?: any
  isWhite?: boolean
  cards?: number
}

interface slideProps {
  children?: any
}

export const SwiperSlide = (props: slideProps) => {
  const { children } = props

  return <div class='swiper-slide'>{children}</div>
}

export const UiSlider = (props: props) => {
  const { className, title, children, isWhite, cards } = props

  const slidesCount = {
    'ui-slider--four-cards': cards === 4,
    'ui-slider--two-cards': cards === 2
  }

  return (
    <div class={cn('ui-slider', slidesCount, className)}>
      <Container>
        <UiSliderHeader title={title} isWhite={isWhite} />

        <div class='swiper'>
          <div class='swiper-wrapper'>{children}</div>
        </div>

        <UiSliderFooter isWhite={isWhite} />
      </Container>
    </div>
  )
}
