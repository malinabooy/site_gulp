import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { concertSlidesData } from '@/modules/main-sliders/data-main-slides'
import { ConcertCard } from '@/modules/concert-card/concert-card'
import { array } from '@/views/utils/array'
import { Button } from '@/modules/button/button'

interface slide {
  src?: string
  title?: string
  descriptions?: string[]
}

interface props {
  className?: string
  concertBlockSlides?: Array<slide>
}

export const ConcertBlock = (props: props) => {
  const { className, concertBlockSlides = concertSlidesData } = props

  return (
    <div class={cn('concert-block', className)}>
      <Container className='concert-block__body' data-id='show-more-body'>
        {array(4).map(() => (
          <>
            {concertBlockSlides.map((slide) => (
              <ConcertCard
                src={slide.src}
                title={slide.title}
                descriptions={slide.descriptions}
                mediaSmall
                className='concert-block__card'
              />
            ))}
          </>
        ))}
        <Button
          tag='button'
          theme='primary'
          className='concert-block__button'
          data-id='show-more'
        >
          Показать еще
        </Button>
      </Container>
    </div>
  )
}
