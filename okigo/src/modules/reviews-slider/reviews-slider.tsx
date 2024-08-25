import cn from 'classnames'
import { SwiperArrows } from '@/modules/swiper-arrows/swiper-arrows'
import { array } from '@/views/utils/array'
import { actorsSlides } from '@/modules/actors-slider/data-actors-slides'
import { SwiperSlide } from '@/modules/ui-slider/ui-slider'
import { Container } from '@/modules/container/container'
import { ReviewsCard } from '@/modules/reviews-card/reviews-card'
import { reviewSlides } from '@/modules/reviews-slider/data-reviews-slides'
import { Button } from '@/modules/button/button'

interface props {
  className?: string
}

export const ReviewsSlider = (props: props) => {
  const { className } = props

  return (
    <div class={cn('reviews-slider', className)}>
      <Container>
        <div class='reviews-slider__header'>
          <h2>Рецензии и отзывы</h2>

          <SwiperArrows smallGap className='reviews-slider__arrows' />
        </div>

        <div class='swiper'>
          <div class='swiper-wrapper'>
            {array(2).map(() => (
              <>
                {reviewSlides.map((slide) => (
                  <SwiperSlide>
                    <ReviewsCard
                      id={slide.id}
                      platform={slide.platform}
                      name={slide.name}
                      date={slide.date}
                      score={slide.score}
                      desc={slide.desc}
                    />
                  </SwiperSlide>
                ))}
              </>
            ))}
          </div>
        </div>

        <div class='reviews-slider__footer'>
          <div class={cn('reviews-slider__pagination')}></div>
          <Button
            tag={'button'}
            theme='primary'
            data-modal-open='#modal-review'
          >
            Оставить комментарий
          </Button>
        </div>
      </Container>
    </div>
  )
}
