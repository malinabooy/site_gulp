import { Button } from '@/modules/button/button'
import { Icon } from '@/modules/icon/icon'
import cn from 'classnames'
import { SwiperArrows } from '@/modules/swiper-arrows/swiper-arrows'

interface props {
  isWhite?: boolean
}

export const UiSliderFooter = (props: props) => {
  const { isWhite } = props

  return (
    <div class='ui-slider-footer'>
      <Button
        tag='a'
        href='javascript:void(0)'
        theme={isWhite ? 'primary-blue-back' : 'primary'}
        className='ui-slider-footer__button-desk'
      >
        Все <Icon name='carret-right' />
      </Button>

      <div
        class={cn('ui-slider-footer__pagination', {
          'ui-slider-footer__pagination--white': isWhite
        })}
      ></div>

      <SwiperArrows
        smallGap
        blueBack={isWhite}
        className='ui-slider-footer__arrows'
      />
    </div>
  )
}
