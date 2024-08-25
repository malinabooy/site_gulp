import cn from 'classnames'
import { PromoCard } from '@/modules/promo-card/promo-card'
import { Container } from '@/modules/container/container'
import { SwiperArrows } from '@/modules/swiper-arrows/swiper-arrows'

interface slide {
  type?: string
  price: string
  image: string
  title: string
  info: string
}

interface props {
  className?: string
  slidesArray: Array<slide>
}

export const PromoSlider = (props: props) => {
  const { className, slidesArray } = props

  return (
    <div class={cn('promo-slider', className)}>
      <Container className='promo-slider__container'>
        <div class='swiper'>
          <div class='swiper-wrapper'>
            {slidesArray.map((slide) => (
              <div class='swiper-slide'>
                <PromoCard
                  type={slide.type}
                  price={slide.price}
                  image={slide.image}
                  title={slide.title}
                  info={slide.info}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className='promo-slider__arrows'>
        <SwiperArrows isThinArrows />
      </Container>
    </div>
  )
}
