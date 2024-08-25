import { BlueBack } from '@/modules/blue-back/blue-back'
import { Container } from '@/modules/container/container'
import { SwiperSlide, UiSlider } from '@/modules/ui-slider/ui-slider'
import { ConcertCard } from '@/modules/concert-card/concert-card'
import {
  concertSlidesData,
  exhibitionSlidesData,
  perfomanceSlidesData
} from '@/modules/main-sliders/data-main-slides'
import { array } from '@/views/utils/array'

interface props {
  className?: string
}

export const MainSliders = (props: props) => {
  const { className } = props

  return (
    <BlueBack className='main-sliders'>
      <UiSlider isWhite title='Концерты'>
        {array(3).map(() => (
          <>
            {concertSlidesData.map((slide) => (
              <SwiperSlide>
                <ConcertCard
                  src={slide.src}
                  title={slide.title}
                  descriptions={slide.descriptions}
                  isWhite
                />
              </SwiperSlide>
            ))}
          </>
        ))}
      </UiSlider>

      <UiSlider isWhite title='Спектакли'>
        {array(3).map(() => (
          <>
            {perfomanceSlidesData.map((slide) => (
              <SwiperSlide>
                <ConcertCard
                  src={slide.src}
                  title={slide.title}
                  descriptions={slide.descriptions}
                  isWhite
                />
              </SwiperSlide>
            ))}
          </>
        ))}
      </UiSlider>

      <UiSlider isWhite title='Выставки'>
        {array(3).map(() => (
          <>
            {exhibitionSlidesData.map((slide) => (
              <SwiperSlide>
                <ConcertCard
                  src={slide.src}
                  title={slide.title}
                  descriptions={slide.descriptions}
                  isWhite
                />
              </SwiperSlide>
            ))}
          </>
        ))}
      </UiSlider>
    </BlueBack>
  )
}
