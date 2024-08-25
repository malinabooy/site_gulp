import cn from 'classnames'
import { Container } from '../container/container'
import carretImage from './assets/col-carret.svg'
import { mostWaitedCardsData, topCardsData } from '@/modules/top-films/data-top-cards'
import { Button } from '@/modules/button/button'
import { TopCard } from '@/modules/top-card/top-card'

interface props {
  className?: string
  isGrayBackground?: boolean
}

export const TopFilms = (props: props) => {
  const { className, isGrayBackground } = props

  const mod = {
    'top-films--gray-back': isGrayBackground
  }

  return (
    <div class={cn('top-films', mod, className)}>
      <Container>
        <div class='top-films__body'>
          <div class='top-films__col'>
            <a href='javascript:void(0)' class='top-films__col-header'>
              <h2>ТОП проката в России и СНГ</h2>
              <img src={carretImage} alt='' />
            </a>

            <div class='top-films__cards-wrap'>
              {topCardsData.map(
                (
                  card: {
                    src: string
                    title: string
                    price: string
                  },
                  index
                ) => (
                  <TopCard index={++index} src={card.src} title={card.title} price={card.price} />
                )
              )}

              <Button theme='primary' tag='a' className='top-films__button'>
                Показать еще
              </Button>
            </div>
          </div>

          <div class='top-films__col'>
            <a href='javascript:void(0)' class='top-films__col-header'>
              <h2>Самые ожидаемые фильмы</h2>
              <img src={carretImage} alt='' />
            </a>

            <div class='top-films__cards-wrap'>
              {mostWaitedCardsData.map(
                (
                  card: {
                    src: string
                    title: string
                    date: string
                    month: string
                  },
                  index
                ) => (
                  <TopCard
                    index={++index}
                    src={card.src}
                    title={card.title}
                    date={card.date}
                    month={card.month}
                  />
                )
              )}

              <Button theme='primary' tag='a' className='top-films__button'>
                Показать еще
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
