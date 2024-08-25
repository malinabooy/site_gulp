import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Button } from '@/modules/button/button'
import { filmCatalogCards } from '@/modules/films-slider/data-films-slides'
import { ConcertCard } from '@/modules/concert-card/concert-card'
import { array } from '@/views/utils/array'

interface props {
  className?: string
}

export const CatalogFilms = (props: props) => {
  const { className } = props

  return (
    <div class={cn('catalog-films', className)}>
      <Container className='catalog-films__body' data-id='show-more-body'>
        {array(3).map(() => (
          <>
            {filmCatalogCards.map((slide) => (
              <ConcertCard
                className='catalog-films__card'
                src={slide.src}
                title={slide.title}
                descriptions={slide.desc}
                rating={slide.rating}
                mediaSmall
              />
            ))}
          </>
        ))}

        <Button
          tag='button'
          theme='primary'
          data-id='show-more'
          centered
          className='catalog-films__button'
        >
          Показать еще
        </Button>
      </Container>
    </div>
  )
}
