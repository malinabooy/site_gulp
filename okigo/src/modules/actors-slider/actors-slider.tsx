import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Title } from '@/modules/title/title'
import { SwiperArrows } from '@/modules/swiper-arrows/swiper-arrows'
import { SwiperSlide } from '@/modules/ui-slider/ui-slider'
import { actorsSlides } from '@/modules/actors-slider/data-actors-slides'
import { array } from '@/views/utils/array'

interface props {
  className?: string
}

export const ActorsSlider = (props: props) => {
  const { className } = props

  return (
    <div class={cn('actors-slider', className)}>
      <Container>
        <div class='actors-slider__header'>
          <h2>Актеры</h2>

          <SwiperArrows smallGap className='actors-slider__arrows' />
        </div>

        <div class='swiper'>
          <div class='swiper-wrapper'>
            {array(2).map(() => (
              <>
                {' '}
                {actorsSlides.map((slide) => (
                  <SwiperSlide>
                    <a href='javascript:void(0)' class='actors-slider__card'>
                      <img src={slide.photo} alt='' />
                      <h3 class='actors-slider__name'>{slide.name}</h3>
                      <p class='actors-slider__prof'>Актер</p>
                    </a>
                  </SwiperSlide>
                ))}
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
