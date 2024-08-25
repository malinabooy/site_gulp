import cn from 'classnames'
import { Container } from '@/modules/container/container'
import { Title } from '@/modules/title/title'
import { citiesList } from '@/modules/city-change/data-cities-list'
import { ratingCards } from '@/modules/rating/data-rating-cards'
import { RatingCard } from '@/modules/rating-card/rating-card'
import { Button } from '@/modules/button/button'

interface props {
  className?: string
}

export const TopUsers = (props: props) => {
  const { className } = props

  return (
    <div
      class={cn('top-users', className, 'section-mb')}
      data-id='show-more-body'
    >
      <Container>
        <Title>Топ пользователей Вконтакте по городам</Title>
        <div class='top-users__body'>
          <aside class='top-users__aside'>
            <div class='top-users__aside-wrap'>
              {citiesList.map((item, index) => (
                <a
                  href='javascript:void(0)'
                  class={cn('top-users__aside-item', {
                    'top-users__aside-item--active': index === 0
                  })}
                >
                  {item}
                </a>
              ))}
            </div>
          </aside>
          <div class='top-users__content'>
            {ratingCards.map(
              (
                card: { src: string; name: string; subscribers: string },
                index
              ) => (
                <RatingCard
                  isSmall
                  specialCount={++index}
                  src={card.src}
                  subscribers={card.subscribers}
                  name={card.name}
                  red={index % 2 === 0}
                  className='top-users__card'
                />
              )
            )}
          </div>
        </div>

        <Button tag={'button'} theme={'primary'} data-id='show-more' centered>
          Показать еще
        </Button>
      </Container>
    </div>
  )
}
