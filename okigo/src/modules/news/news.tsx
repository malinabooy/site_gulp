import cn from 'classnames'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import { NewsCard } from '@/modules/news-card/news-card'
import { newsProps } from '@/modules/news-card/news-card'
import { newsCardsSlides } from '@/modules/news/data-news-cards'
import { array } from '@/views/utils/array'
import { UiSliderHeader } from '@/modules/ui-slider/ui-slider-header'
import { UiSliderFooter } from '@/modules/ui-slider/ui-slider-footer'
import { Container } from '@/modules/container/container'

interface props {
  className?: string
  isWhite?: boolean
  noMb?: boolean
}

export const News = (props: props) => {
  const { className, isWhite, noMb } = props

  return (
    <div class={cn('news', { 'news--no-mb': noMb }, className)}>
      <Container>
        <UiSliderHeader title={'Новости из мира кино'} isWhite={isWhite} />
        <div class='swiper'>
          <div class='swiper-wrapper'>
            {array(2).map(() => (
              <>
                {newsCardsSlides.map((slide: newsProps) => (
                  <SwiperSlide>
                    <NewsCard isWhite={isWhite} src={slide.src} quote={slide.quote} />
                  </SwiperSlide>
                ))}
              </>
            ))}
          </div>
        </div>

        <UiSliderFooter isWhite={isWhite} />
      </Container>
    </div>
  )
}
