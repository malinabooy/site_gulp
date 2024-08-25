import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Title } from '@/modules/title/title'
import { RatingCard } from '@/modules/rating-card/rating-card'
import { ratingCards } from '@/modules/rating/data-rating-cards'
import { Button } from '@/modules/button/button'

interface props {
  className?: string
}

export const Rating = (props: props) => {
  const { className } = props

  return (
    <div class={cn('rating', className)}>
      <Container>
        <Title className='rating__title'>
          Топ 5 звезд okigo по приросту новых подписчиков
        </Title>

        <div class='rating__body'>
          {ratingCards.map(
            (
              card: { src: string; name: string; subscribers: string },
              index
            ) => (
              <RatingCard
                count={++index}
                src={card.src}
                subscribers={card.subscribers}
                name={card.name}
                red={index % 2}
                className='rating__card'
              />
            )
          )}
        </div>

        <Button
          tag='a'
          href='javascript:void(0)'
          theme='primary'
          className='rating__button'
        >
          Показать еще
        </Button>
      </Container>
    </div>
  )
}
