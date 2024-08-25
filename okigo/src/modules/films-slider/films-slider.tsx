import cn from 'classnames'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import { CardChips } from '@/modules/card-chips/card-chips'
import { ConcertCard } from '@/modules/concert-card/concert-card'
import { filmSliderSlides } from '@/modules/films-slider/data-films-slides'

interface props {
  className?: string
  isBig?: boolean
  isWhite?: boolean
  title?: string
}

export const FilmsSlider = (props: props) => {
  const { className, isBig = true, isWhite = true, title } = props

  return (
    <UiSlider
      title={title ?? 'Фильмы'}
      isWhite={isWhite}
      className={cn('films-slider', className)}
    >
      {filmSliderSlides.map((slide) => (
        <SwiperSlide>
          <ConcertCard
            src={slide.src}
            title={slide.title}
            descriptions={slide.desc}
            rating={slide.rating}
            isBig={isBig}
          />
        </SwiperSlide>
      ))}
    </UiSlider>
  )
}
